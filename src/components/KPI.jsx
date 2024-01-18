import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepPurple, pink } from "@mui/material/colors";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";

const kpiData = [
  {
    id: 1,
    title: "sales",
    amount: "$16900",
    icon: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
    bgColor: deepPurple[100],
    color: deepPurple[700],
  },
  {
    id: 2,
    title: "sales",
    amount: "$16900",
    icon: <ShoppingCartIcon sx={{ fontSize: "2rem" }} />,
    bgColor: pink[100],
    color: pink[700],
  },
  {
    id: 3,
    title: "sales",
    amount: "$16900",
    icon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
    bgColor: amber[100],
    color: amber[700],
  },
];

const KPI = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((item) => (
        <Paper
          key={item.id}
          elevation={10}
          sx={{
            display: "flex",
            p: 2,
            gap: 2,
            width: "250px",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: item.bgColor,
              color: item.color,
              width: "70px",
              height: "70px",
            }}
          >
            {item.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{item.title}</Typography>
            <Typography variant="h5">{item.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPI;
