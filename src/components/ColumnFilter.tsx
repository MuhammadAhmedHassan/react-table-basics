import { FC } from "react";

interface IProps {
  column: any;
}

export const ColumnFilter: FC<IProps> = ({ column }) => {
  const { filterValue = "", setFilter } = column;
  return (
    <span>
      Search:{" "}
      <input
        type='text'
        value={filterValue}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
