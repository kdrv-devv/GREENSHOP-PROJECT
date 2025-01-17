import { useState, type FC } from "react";
import { DataType } from "../../../@types";
import { Image, Skeleton } from "antd";

const ShopSwiper: FC<DataType> = ({ data, isLoading, isError }) => {
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-[1.6rem] justify-between h-full">
        {data?.detailed_images.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setImgSrc(item)}
            className="h-[10rem] w-[10rem] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors"
          >
            <img className="w-full h-full" src={item} />
          </div>
        ))}
      </div>
      <div className=" cursor-pointer flex justify-center items-center w-full order-1  ">
        {isLoading || isError ? (
          <Skeleton.Image className="!w-full h-[40rem]"  active />
        ) : (
          <Image
            className="!w-full !h-full"
            src={imgSrc ? imgSrc : data?.main_image}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default ShopSwiper;
