import { useSearchParams } from "react-router-dom";

const searchParam = () => {
  const [params , setParams] = useSearchParams();

  const getParam = (path:string) => params.get(path)
  const setParam = (param:object) => {
    setParam({
        ...param
    })
  };
  return {getParam , setParam}
};
