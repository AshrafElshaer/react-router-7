import { useGetProductQuery, productApi } from "../../redux/productApi";
import htmlParse from "html-react-parser";

export const loader = async () => {
  productApi.endpoints.getProduct.initiate();
  return;
};

export default function RtkQuery() {
  const { data } = useGetProductQuery();
  return (
    <div>
      {data && <h2>{data.productName}</h2>}
      {data && <div>{htmlParse(data.description)}</div>}
    </div>
  );
}
