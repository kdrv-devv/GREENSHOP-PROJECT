import { Select } from "antd";

const ProductsTitle = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="products-titile-left  flex items-center gap-[3.7rem] text-[#3D3D3D] font-normal text-[1.5rem] ">
        <h3>All Plants</h3>
        <h3 className="">New Arrivals</h3>
        <h3>Sale</h3>
      </div>

      <div className="products-titile-right flex items-center gap-[0.8rem]">
        <p className="text-[1.5rem] font-normal text-[#3D3D3D]">Sort by:</p>
        <Select
            className="w-[15rem]"
          options={[
            { value: "default-sorting", label: "Default sorting" },
            { value: "the-cheapest", label: "The cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
          defaultValue="Defaul sorting"
        />
      </div>
    </div>
  );
};

export default ProductsTitle;
