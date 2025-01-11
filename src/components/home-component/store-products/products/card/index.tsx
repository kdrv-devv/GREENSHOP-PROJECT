import type { FC } from "react";
import type { CartType } from "../../../../../@types";

const Card: FC<CartType> = (props) => {
  return (
    <div className="flex flex-col gap-[1.2rem]">
      <div className="h-[30rem] bg-[#f5f5f5] flex justify-center items-center relative">
        <img className="w-4/5 h-[80%]" src={props.main_image} alt="" />
      </div>
      <h4 className="font-normal text-[1.6rem] text-[#3D3D3D] ">{props.title}</h4>
    </div>
  );
};

export default Card;
