import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const columns = [
  { field: "_id", headerName: "#", width: 90, headerAlign: "center" },
  {
    field: "category",
    headerName: "Category",
    // width: 150,
    editable: true,
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "brand",
    headerName: "Brand",
    flex: 1,
    editable: true,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    editable: true,
    headerAlign: "center",
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    flex: 1,
    editable: true,
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    flex: 1,
    headerAlign: "center",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  useEffect(() => {
    getStock();
  });
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        autoHeight
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
