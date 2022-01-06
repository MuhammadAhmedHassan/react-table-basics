import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelectionTable } from "./components/RowSelection";
import { ColumnOrderTable } from "./components/ColumnOrder";
import { ColumnHidingTable } from "./components/ColumnHiding";

function App() {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      {/* <ColumnOrderTable /> */}
      <ColumnHidingTable />
    </div>
  );
}

export default App;
