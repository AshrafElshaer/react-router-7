import { useGetProductQuery, productApi } from "../../redux/productApi";
import htmlParse from "html-react-parser";
import { store } from "../../redux/store";

export const loader = async () => {
  const state = await store.dispatch(productApi.endpoints.getProduct.initiate());
  return { state };
};

export default function RtkQuery() {
  const { data } = useGetProductQuery(undefined, {
    skip: false,
  });
  return (
    <div>
      {data && <h2>{data.productName}</h2>}
      {data && <div>{htmlParse(data.description)}</div>}
    </div>
  );
}
