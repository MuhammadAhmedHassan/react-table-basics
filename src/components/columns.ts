import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    isSortable: true,
    // Filter: ColumnFilter, // Have added defaultColumn in the FilteringTable file
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    isSortable: true,
    // Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    isSortable: true,
    // Filter: ColumnFilter,
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    isSortable: true,
    Cell: ({ value }: { value: any }) => format(new Date(value), "dd/MM/yyyy"),
    // Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    isSortable: true,
    // Filter: ColumnFilter,
  },
  { Header: "Phone", Footer: "Phone", accessor: "phone", isSortable: true },
];

export const GROUPED_COLUMNS = [
  { Header: "Id", Footer: "Id", accessor: "id" },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      { Header: "First Name", Footer: "First Name", accessor: "first_name" },
      { Header: "Last Name", Footer: "Last Name", accessor: "last_name" },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      { Header: "Country", Footer: "Country", accessor: "country" },
      { Header: "Phone", Footer: "Phone", accessor: "phone" },
    ],
  },
];
