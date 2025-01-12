import type { CartType } from "../../../../@types";
import { useLoader } from "../../../../generic/loading";
import { useQuerHandler } from "../../../../hooks/useQuery";
import Card from "./card";
import ProductsTitle from "./products-title";

const Products = () => {
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CartType[] } =
    useQuerHandler({
      pathname: "products",
      url: "/flower/category/house-plants",
    });

    const {cart_loading} = useLoader()
    return (
    <div className="w-full">
      <ProductsTitle />
      <div className="grid grid-cols-3 gap-[4rem] mt-[3.1rem]">
        
        {isLoading || isError
          ? cart_loading()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
