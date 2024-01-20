"use client";
import { AreaChart, Card, Title } from "@tremor/react";
import { useSelector } from "react-redux";
import { Container, Stack } from "@mui/material";
import { Grid } from "@mui/material";

const chartdata = [
  {
    date: "Jan 22",
    price: "",
    "The Pragmatic Engineer": 2338,
  },
];

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);
  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"), // tarihi formatlama işlemi
    amount: item.amount,
  }));
  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"), // tarihi formatlama işlemi
    amount: item.amount,
  }));

  console.log(salesData);

  //  satış miktari kadar bir obje oluşturduk verileri basmak için
  return (
    <Container>
      {/* büyümeyi engellemek için ve ortalı olması için */}
      <Grid container spacing={2} mt={4} flexWrap="wrap" alignItems="center">
        <Grid item xs={12} md={6}>
          <Card>
            <Title>Total Sales (USD)</Title>
            <AreaChart
              className="h-72 mt-4"
              data={salesData}
              index="date"
              // x eksini
              yAxisWidth={65}
              categories={["amount"]}
              colors={["indigo"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Title>Total Purchases (USD)</Title>
            <AreaChart
              className="h-72 mt-4"
              data={purchasesData}
              index="date"
              // x eksini
              yAxisWidth={65}
              categories={["amount"]}
              colors={["cyan"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
