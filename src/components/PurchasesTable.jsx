import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";
import { DeleteForever } from "@mui/icons-material";

export default function PurchasesTable() {
  const { deleteStock } = useStockCalls();
  const { purchases, firms } = useSelector((state) => state.stock);
  // const { products } = useSelector((state) => state.stock);

  const columns = [
    {
      field: "updatedAt",
      headerName: "Date",
      flex: 1.4,
      headerAlign: "center",
      sortable: false,
      align: "center",
      minWidth: "150px",
      valueGetter: (params) => {
        const dateString = params.value;
        return dateString.slice(0, 10);
      }
     
    },
    {
      field: "_id",
      headerName: "Actions",
      flex: 1.4,
      headerAlign: "center",
      sortable: false,
      align: "center",
      minWidth: "150px",
      // içeriği hizalama işlemi yapar.
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: "150px",
      valueGetter: (params) => {
        console.log(params);
        return params.row.categoryId?.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.2,
      headerAlign: "center",
      align: "center",
      minWidth: "150px",
      valueGetter: (props) => props.row?.brandId?.name,
      // tabloda başka verilere erişmek gerekirse value getter şeklinde yazmamız yeterli.
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      minWidth: "150px",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      minWidth: "150px",
    },

    // bu fonksiyon bize ne döndürüyor. Bu fonksiyon içierisine birçok veriye erişebilir. Bir sürü parametreleri var. İçinde bulunduğumuz rowun her türlü verisine buradan erişebiliyoruz.
    //   valueGetter: (props) =>
    //     `${props.row.firstName || ""} ${props.row.lastName || ""}`,
    // },
    {
      field: "actions",
      type: "actions",
      getActions: (props) => [
        //  burda bir array döndürüyor.
        <GridActionsCellItem
          icon={<DeleteForever />}
          onClick={() => deleteStock("purchases", props.id)}
          label="Delete"
        />,
      ],
    },
  ];

  function getRowId(row) {
    return row._id;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={purchases}
        pageSizeOptions={[5, 10, 15, 20]}
        // bu otomatik sayfaya pagination ekleme işlemi yapmamızı sağlar.
        // rowlar apiden gelecek olan veriler bizim için
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
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
