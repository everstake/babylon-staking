import { twJoin } from "tailwind-merge";
import { ColumnProps } from "../types";
import { Cell } from "./Cell";

export function Row<T extends { id: string | number }>({
  row,
  columns,
  isSelected,
  isSelectable,
  onSelect,
}: {
  row: T;
  columns: ColumnProps<T>[];
  isSelected: boolean;
  isSelectable: boolean;
  onSelect: (row: T) => void;
}) {
  return (
    <tr
      className={twJoin(
        isSelected && "selected",
        !!onSelect && isSelectable && "cursor-pointer",
        !isSelectable && "opacity-50",
      )}
      onClick={() => onSelect(row)}
    >
      {columns.map((column) => (
        <Cell
          key={column.key}
          value={row[column.key as keyof T]}
          columnName={column.key}
          className={column.cellClassName}
          render={
            column.render ? (value) => column.render!(value, row) : undefined
          }
        />
      ))}
    </tr>
  );
}
