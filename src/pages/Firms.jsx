import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";

const Firms = () => {
  const { getFirms } = useStockCalls();
  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      <Typography variant="h3" color="error">
        Firms
      </Typography>
      <Button variant="container">New Firm</Button>
    </div>
  );
};

export default Firms;
