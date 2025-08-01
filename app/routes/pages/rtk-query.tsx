import { useGetProductQuery, productApi } from "../../redux/productApi";
import htmlParse from "html-react-parser";
import { store } from "../../redux/store";
import { Typography } from "@mui/material";

export const loader = async () => {
  await store.dispatch(productApi.endpoints.getProduct.initiate("6607"));
  return 
};

export default function RtkQuery() {
  const { data } = useGetProductQuery("6607");
  return (
    <div>
      {data && <Typography variant="h2">{data.productName}</Typography>}
      {data && <div>{htmlParse(data.description)}</div>}
    </div>
  );
}
