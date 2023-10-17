import { useState } from "react";
import Slider from '@mui/material/Slider';
import { MdOutlineFilterAlt } from "react-icons/md";
import { Popover } from 'antd';
import { englishToPersianNumber } from "../../utils/englishToPersianNumber";

const SliderRange = () => {
  
  const [priceRange, setPriceRange] = useState([18000000, 38000000]);
  const [minPrice, maxPrice] = priceRange;

  const handleChange = (event , newValue ) => {
    setPriceRange(newValue);
  };

  const searchHandler = () => {
    window.open(`/products/filter/${minPrice}/${maxPrice}`, '_blank');
  };

return (
  <div className="w-full h-full flex flex-row justify-center items-center">
    <div className="w-1/12 h-full flex flex-row justify-end items-center">
      <Popover content="فیلتر" title="فیلتر">
        <button onClick={searchHandler} className="w-full h-full flex flex-row justify-center items-center text-[#FBCB07] text-[2rem] cursor-pointer">
          <MdOutlineFilterAlt />
        </button>
      </Popover>
    </div>
    <div className="w-11/12 h-full flex flex-row justify-center items-center gap-2">
      <Slider
      value={priceRange}
      onChange={handleChange}
      min={0}
      max={74000000}
      step={5000000}
      valueLabelDisplay="auto"
      valueLabelFormat={(value) => englishToPersianNumber(value)}
      />
    </div>
  </div>
  );
}

export default SliderRange;