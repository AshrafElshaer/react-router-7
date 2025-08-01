import { useGetProductsQuery, productApi } from "../../redux/productApi";
import htmlParse from "html-react-parser";

export const loader = async () => {
  productApi.endpoints.getProducts.initiate();
  return;
};

export default function RtkQuery() {
  const { data } = useGetProductsQuery();
  return (
    <div>
      {data && <h2>{data.productName}</h2>}
      {data && <div>{htmlParse(data.description)}</div>}
    </div>
  );
}
