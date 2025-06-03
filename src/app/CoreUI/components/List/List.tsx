import {
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
  type PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";
import "./List.css";

import { ListItem, type ListItemProps } from "./components/ListItem";

export interface ListProps {
  className?: string;
  orientation: "adaptive" | "horizontal" | "vertical";
  children:
    | ReactElement<ListItemProps, typeof ListItem>
    | ReactElement<ListItemProps, typeof ListItem>[];
}

const ROW_ORIENTATION = {
  adaptive: "adaptive",
  horizontal: "vertical",
  vertical: "horizontal",
} as const;

export function List({
  className,
  orientation = "vertical",
  children,
}: PropsWithChildren<ListProps>) {
  return (
    <div
      className={twMerge(
        "bbn-es-list",
        `bbn-es-list-${orientation}`,
        className,
      )}
    >
      {Children.map(children, (item) =>
        isValidElement(item)
          ? cloneElement(item, { orientation: ROW_ORIENTATION[orientation] })
          : item,
      )}
    </div>
  );
}
