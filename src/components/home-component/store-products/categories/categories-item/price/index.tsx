import { Slider } from 'antd'
import { useState } from 'react'

const PriceParam = () => {
  const [price, setPrice] = useState<number[]>([0, 1000]);

  return (
    <div className="mt-[3.6rem]">
        <h3 className="font-bold text-[1.8rem] text-[#3D3D3D]">Price Range</h3>
        <div className="px-[1.8rem] flex flex-col gap-[1.1rem]">
          <Slider
            range
            min={0}
            max={1000}
            value={price}
            onChange={(e) => setPrice(e)}
          />
          <h5 className="font-[500] text-[1.5rem] text-[#3D3D3D]">
            Price:{" "}
            <span className="font-bold text-[1.5rem] text-[#46A358]">
              ${price[0]} - ${price[1]}
            </span>
          </h5>
          <button className="w-[9rem] h-[3.5rem]  text-[1.6rem] font-bold text-[#ffff] bg-[#46A358] flex items-center justify-center rounded-[0.6rem]">
            Filter
          </button>
        </div>
      </div>
  )
}

export default PriceParam