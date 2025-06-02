import { useControlledState } from "@/app/CoreUI/hooks/useControlledState";
import { useTableScroll } from "@/app/CoreUI/hooks/useTableScroll";
import { useTableSort } from "@/app/CoreUI/hooks/useTableSort";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { twJoin } from "tailwind-merge";
import { TableContext, TableContextType } from "../../context/Table.context";
import "./Table.css";
import { Column } from "./components/Column";
import { Row } from "./components/Row";
import type { TableData, TableProps } from "./types";

function TableBase<T extends TableData>(
  {
    data,
    columns,
    className,
    wrapperClassName,
    hasMore = false,
    loading = false,
    onLoadMore,
    onRowSelect,
    isRowSelectable,

    selectedRow: selectedRowProp,
    defaultSelectedRow,
    onSelectedRowChange,

    ...restProps
  }: TableProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const tableRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => tableRef.current!, []);

  const { sortStates, handleColumnSort, sortedData } = useTableSort(
    data,
    columns,
  );
  const { isScrolledTop } = useTableScroll(tableRef, {
    onLoadMore,
    hasMore,
    loading,
  });

  const [selectedRow, setSelectedRow] = useControlledState<
    string | number | null
  >({
    value: selectedRowProp,
    defaultValue: defaultSelectedRow ?? null,
    onStateChange: onSelectedRowChange,
  });

  const handleRowSelect = useCallback(
    (row: T) => {
      if (!onRowSelect || (isRowSelectable && !isRowSelectable(row))) return;
      const newValue = selectedRow === row.id ? null : row.id;
      setSelectedRow(newValue);
      onRowSelect(newValue === null ? null : row);
    },
    [onRowSelect, isRowSelectable, selectedRow, setSelectedRow],
  );

  const contextValue = useMemo(
    () => ({
      data: sortedData,
      columns,
      sortStates,
      onColumnSort: handleColumnSort,
      onRowSelect: handleRowSelect,
    }),
    [sortedData, columns, sortStates, handleColumnSort, handleRowSelect],
  );

  return (
    <TableContext.Provider value={contextValue as TableContextType<unknown>}>
      <div
        ref={tableRef}
        className={twJoin("bbn-table-wrapper", wrapperClassName)}
      >
        <table className={twJoin("bbn-table", className)} {...restProps}>
          <thead
            className={twJoin(
              "bbn-table-header",
              isScrolledTop && "scrolled-top",
            )}
          >
            <tr>
              {columns.map((column) => (
                <Column
                  key={column.key}
                  className={column.headerClassName}
                  name={column.key}
                  sorter={column.sorter}
                >
                  {column.header}
                </Column>
              ))}
            </tr>
          </thead>
          <tbody className="bbn-table-body">
            {sortedData.map((row) => (
              <Row
                key={row.id}
                row={row}
                columns={columns}
                isSelected={selectedRow === row.id}
                isSelectable={isRowSelectable ? isRowSelectable(row) : true}
                onSelect={handleRowSelect}
              />
            ))}
          </tbody>
        </table>
      </div>
    </TableContext.Provider>
  );
}

export const Table = forwardRef(TableBase) as <T extends TableData>(
  props: TableProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;
