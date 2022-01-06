import { FC, useState } from "react";
import { useAsyncDebounce } from "react-table";

interface IProps {
  filter: "";
  setFilter: (val: string) => void;
}

export const GlobalFilter: FC<IProps> = ({ filter = "", setFilter }) => {
  const [value, setValue] = useState<string>(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 400);
  return (
    <span>
      Search:{" "}
      <input
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // setFilter(e.target.value)
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
