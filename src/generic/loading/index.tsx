import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <div key={idx} className="mb-1">
        <Skeleton.Input className="!w-full "  active/>
      </div>
    ));
  };
  return {category_loader}
};

export {useLoader}