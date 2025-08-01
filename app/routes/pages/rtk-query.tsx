import { useGetProductQuery, productApi } from "../../redux/productApi";
import htmlParse from "html-react-parser";
import { store } from "../../redux/store";

export const loader = async () => {
  await store.dispatch(productApi.endpoints.getProduct.initiate("6607"));
  return 
};

export default function RtkQuery() {
  const { data } = useGetProductQuery("6607");
  return (
    <div>
      {data && <h2>{data.productName}</h2>}
      {data && <div>{htmlParse(data.description)}</div>}
    </div>
  );
}
