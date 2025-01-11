import { Slider } from "antd";
import { CategoryType } from "../../../../@types";
import { useQuerHandler } from "../../../../hooks/useQuery";
import CategoriesItem from "./categories-item";
import { useState } from "react";

const Categories = () => {
    const [price , setPrice] = useState<number[]>([0,1000])
  const {
    data,
    isLoading,
    isError,
  }: { isLoading: boolean; isError: boolean; data?: CategoryType[] } =
    useQuerHandler({
      pathname: "categories",
      url: "/flower/category",
    });
  return (
    <div className="w-[31rem] p-[1.4rem] bg-[#FBFBFB]">
      <h3 className="font-bold text-[1.8rem] text-[#3D3D3D]">Categories</h3>
      <div className="category-bottom p-[1.8rem] flex flex-col gap-[2.2rem]">
        {isLoading || isError
          ? ""
          : data?.map((value: CategoryType) => (
              <CategoriesItem key={value._id} {...value} />
            ))}
      </div>

      <div className="mt-[3.6rem]">
        <h3 className="font-bold text-[1.8rem] text-[#3D3D3D]">Price Range</h3>
        <div className="px-[1.8rem]">
          <Slider min={price[0]} max={price[1]} range defaultValue={price} onChange={(e) => setPrice(e)} />
          <h5>Price: <span>{price[0]}$ - {price[1]}$</span></h5>
        </div>
      </div>
    </div>
  );
};

export default Categories;

// font-thin - 100
// font-extralight - 200
// font-light - 300
// font-normal - 400
// font-medium - 500
// font-semibold - 600
// font-bold - 700
// font-extrabold - 800
// font-black - 900
