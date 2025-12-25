import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { category } from '../constant/category';
import { fetchData } from '../../redux/Data/action';
import { useDispatch } from 'react-redux';

export default function SelectDropdown() {
  const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(fetchData(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="value"
          onChange={handleChange}
        >
          {category.map((item)=>{
            return(
              <MenuItem value={item.id}>{item.value}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
