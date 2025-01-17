import { useParams } from "react-router-dom";
import { useQuerHandler } from "../../hooks/useQuery";
import type { DataType } from "../../@types";
import ShopSwiper from "./shop-swiper";
import ShopDescription from "./shop-description";

interface ParamsType {
  category?: string;
  id?: string;
}



const ShopComponent = () => {
  const { category, id }: ParamsType = useParams();
  const { data, isLoading, isError }: DataType = useQuerHandler({
    pathname: "id_card",
    url: `/flower/category/${category}/${id}`,
  });


  return <section className="w-[90%] m-auto">
    <div className="grid grid-cols-2 gap-5">
        <ShopSwiper data={data} isLoading={isLoading} isError={isError} />
        <ShopDescription/>
    </div>
  </section>;
};

export default ShopComponent;
