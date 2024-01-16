import { useSelector } from "react-redux";
import PurchasesTable from "../components/PurchasesTable";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";

const Purchases = () => {
  const { getStocks } = useStockCalls();
  const { purchases } = useSelector((state) => state.stock);

  
  useEffect(() => {
    getStocks("purchases")
  }, [])
  
  return (
    <div>
      <PurchasesTable />
    </div>
  );
};

export default Purchases;
