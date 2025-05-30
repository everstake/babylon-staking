import { twJoin } from "tailwind-merge";

import { Text } from "@/app/CoreUI/components/Text";

export interface ListItemProps {
  className?: string;
  orientation?: "adaptive" | "horizontal" | "vertical";
  title: string | JSX.Element;
  value: string | JSX.Element;
  suffix?: JSX.Element;
}

export function ListItem({
  className,
  orientation = "horizontal",
  title,
  value,
  suffix,
}: ListItemProps) {
  return (
    <div
      className={twJoin(
        "bbn-es-list-item",
        `bbn-es-list-item-${orientation}`,
        className,
      )}
    >
      <Text
        as="div"
        className={twJoin(
          "bbn-es-list-title",
          `bbn-es-list-title-${orientation}`,
        )}
        variant={orientation === "horizontal" ? "body1" : "body2"}
      >
        {title}
      </Text>

      <Text
        as="div"
        className={twJoin(
          "bbn-es-list-value",
          `bbn-es-list-value-${orientation}`,
        )}
        variant="body1"
      >
        {value}
        {suffix}
      </Text>
    </div>
  );
}
