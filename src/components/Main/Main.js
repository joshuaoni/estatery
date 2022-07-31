import React, { useState } from 'react';
import './Main.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, IconButton, InputBase, Paper } from '@mui/material';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter/Filter';
// images
import img7 from '../../assets/1.jpg';
import img8 from '../../assets/2.jpg';
import img9 from '../../assets/3.jpg';
import img10 from '../../assets/4.jpg';
import img11 from '../../assets/5.jpg';
import img1 from '../../assets/6.jpg';
import img2 from '../../assets/7.jpg';
import img3 from '../../assets/8.jpg';
import img4 from '../../assets/9.jpg';

// dummy properties data
const properties = [
  { id: 1, image: img1, name: 'Palmer Harbour', price: 1000, type: 'office', location: 'London', size: 150 },
  { id: 2, image: img2, name: 'Beverly Springs', price: 200, type: 'office', location: 'Liverpool', size: 400 },
  { id: 3, image: img3, name: 'Faulker Avenue', price: 1350, type: 'shop', location: 'Liverpool', size: 230 },
  { id: 4, image: img8, name: 'Peckham XY Palace', price: 4500, type: 'house', location: 'Peckham', size: 340 },
  { id: 5, image: img9, name: 'Everton XY Houses', price: 3400, type: 'house', location: 'Liverpool', size: 405 },
  { id: 6, image: img10, name: 'George XY Complex', price: 800, type: 'shop', location: 'Peckham', size: 480 },
  { id: 7, image: img7, name: 'Seventh St. Houses', price: 3400, type: 'shop', location: 'London', size: 190 },
  { id: 8, image: img11, name: 'Birmngham St. Blk', price: 2800, type: 'office', location: 'Peckham', size: 290 },
  { id: 9, image: img4, name: 'Francis XY. Duplex', price: 3800, type: 'house', location: 'London', size: 300 },
]

const Main = () => {
  const [estates, setEstates] = useState(properties);

  const settingEstates = (val) => {
    setEstates(val);
  }

  // Search For Property By Name Function
  const handleChange = (val) => {
    const newState = properties.filter(obj => {
      return obj.name.toLowerCase().includes(val.trim().toLowerCase());
    })
    settingEstates(newState);
  }

  return (
    <section className='mh6 mb3'>
      <Grid container spacing={2} className='mt5 mb3'>
        <Grid item md={8} xs={12} className='tc1'>
          <Typography variant="h4" gutterBottom component="span" className='fw7'>
            Search properties to rent
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          {/* Search component */}
          <Paper
            className='input1'
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for property name..."
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={(e) => { handleChange(e.target.value) }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>

      {/* Filter Component */}
      <Filter properties={properties} settingEstates={settingEstates} />

      <Grid className='mt3' container spacing={2}>
        {
          estates.length ?
            estates.map(({ id, image, name, price, type, location, size }) => {
              return (
                <Grid key={id} item md={4} xs={12} className='flex'>
                  <Card className='w-100'>
                    <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <div>
                        <Typography variant="h6" gutterBottom component="div" color="secondary">
                          ${price}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography className='mb2' variant="body2" color="text.secondary">
                          {location}
                        </Typography>
                      </div>
                      <Grid className='cont' container spacing={4}>
                        <Grid item md={12} xs={4} className='flex g-grid'>
                          <SingleBedIcon color="secondary" />
                          <Typography variant="body2" gutterBottom component="span" className='text-align-center heading-list'>
                            {type}
                          </Typography>
                        </Grid>
                        <Grid item md={12} xs={8} className='flex g-grid'>
                          <HouseIcon color="secondary" />
                          <Typography variant="body2" gutterBottom component="span" className='text-align-center heading-details'>
                            {size} sqr ft
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              )
            }) :
            <Typography variant="h5" gutterBottom component="div" className='tc w-100 mv5'>
              No properties match that descripton
            </Typography>
        }
      </Grid>
    </section>
  );
}

export default Main;