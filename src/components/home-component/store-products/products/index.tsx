import type { CartType } from "../../../../@types";
import { useQuerHandler } from "../../../../hooks/useQuery";
import Card from "./card";
import ProductsTitle from "./products-title";

const Products = () => {
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CartType[] } =
    useQuerHandler({ pathname: "products", url: "/flower/category/house-plants" });
  console.log(data);
  return (
    <div className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-[4rem] mt-[3.1rem]">
        {isLoading || isError
          ? ""
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
