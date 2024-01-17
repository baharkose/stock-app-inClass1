import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { deepPurple } from "@mui/material/colors";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";

const KPI = () => {
  const kpiData = [
    {
      id: 1,
      title: "sales",
      amount: "$16900",
      icon: <MonetizationOnIcon />,
      bgColor: deepPurple[100],
      color: deepPurple[600],
    },
  ];
  return (
    <Stack justifyContent="center">
      <Paper elevation={2}>kpi</Paper>
    </Stack>
  );
};

export default KPI;
