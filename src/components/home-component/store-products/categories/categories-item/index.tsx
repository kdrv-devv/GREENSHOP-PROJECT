import type { FC } from "react"
import { CategoryType } from "../../../../../@types"

const CategoriesItem:FC<CategoryType> = (props) => {
    console.log("render")
    return (
    <div className="flex items-center justify-between cursor-pointer font-bold text-[1.5rem] text-[#3D3D3D] transition-all hover:text-[#46A358]">
        <h4>{props.title}</h4>
        <h6>({Math.abs(props.count)})</h6>
    </div>
  )
}

export default CategoriesItem