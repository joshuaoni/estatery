import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



const Filter = ({ properties, settingEstates }) => {
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [size, setSize] = useState('');

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  }

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const handleSize = (event) => {
    setSize(event.target.value);
  }

  const handleSubmit = () => {
    const newState = properties.filter(obj => {
      return obj.price <= price && obj.type === type && obj.location === location && obj.size <= size;
    })
    settingEstates(newState);
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid className='grd' item md={2.4} xs={12}>
          <FormControl className='w-100' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Price</InputLabel>
            <Select
              className='br00'
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={price}
              label="Price"
              onChange={handlePrice}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={500}>$500 Or Less</MenuItem>
              <MenuItem value={2000}>$2000 Or Less</MenuItem>
              <MenuItem value={5000}>$5000 Or Less</MenuItem>
            </Select>

          </FormControl>
        </Grid>
        <Grid item className='grd' md={2.4} xs={12}>
          <FormControl className='w-100' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Property Type</InputLabel>
            <Select
              className='br00'
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={type}
              label="Property Type"
              onChange={handleType}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='house'>Houses</MenuItem>
              <MenuItem value='shop'>Shops</MenuItem>
              <MenuItem value='office'>Offices</MenuItem>
            </Select>

          </FormControl>
        </Grid>
        <Grid item className='grd' md={2.4} xs={12}>
          <FormControl className='w-100' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
            <Select
              className='br00'
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={location}
              label="Location"
              onChange={handleLocation}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='London'>London</MenuItem>
              <MenuItem value='Peckham'>Peckham</MenuItem>
              <MenuItem value='Liverpool'>Liverpool</MenuItem>
            </Select>

          </FormControl>
        </Grid>
        <Grid item className='grd' md={2.4} xs={12}>
          <FormControl className='w-100' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Space</InputLabel>
            <Select
              className='br00'
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={size}
              label="Space"
              onChange={handleSize}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={200}>200 sqr ft or less</MenuItem>
              <MenuItem value={300}>300 sqr ft or less</MenuItem>
              <MenuItem value={500}>500 sqr ft or less</MenuItem>
            </Select>

          </FormControl>
        </Grid>
        <Grid item md={2.4} className='flex items-center' xs={12}>
          <Button className='bg-purple mxc w-100' variant="contained"
            onClick={handleSubmit}>Filter</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Filter