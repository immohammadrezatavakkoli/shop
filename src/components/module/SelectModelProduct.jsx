import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectModelProduct = ({ setSelectedModel }) => {

  const [modelProduct , setModelProduct] = useState('');

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setModelProduct(selectedValue);
    setSelectedModel(selectedValue);
  };

  return (
    <div className="w-1/2 h-full">
      <Select
        className='w-full h-full'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={modelProduct}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenuItem-root': {
                padding: 2,
              },
            },
          },
        }}
      >
        <MenuItem value={""}>همه</MenuItem>
        <MenuItem value={"apple"}>اپل</MenuItem>
        <MenuItem value={"macbook"}>مک بوک</MenuItem>
        <MenuItem value={"samsung"}>سامسونگ</MenuItem>
        <MenuItem value={"xiaomi"}>شیائومی</MenuItem>
      </Select>
    </div>
  );
}

export default SelectModelProduct;