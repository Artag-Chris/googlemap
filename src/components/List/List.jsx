import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';
import { Restaurant } from '@material-ui/icons';



const List = ({places,childClicked}) =>{
    const classes = useStyles();
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");	
    
console.log({childClicked});
    return(
        <div className={classes.container}>
            <Typography variant="h4" className={classes.title}>Restaurantes, Hoteles y Atracciones</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel >Categorias</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurantes</MenuItem>
                    <MenuItem value="hotels">Hoteles</MenuItem>
                    <MenuItem value="attractions">Atracciones</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel >Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={0}>Todos</MenuItem>
                    <MenuItem value={3}> 3 o Superior</MenuItem>
                    <MenuItem value={4}>4 o Superior</MenuItem>
                    <MenuItem value={4.5}>4.5 o Superior</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
             {places?.map((place,index)=>(
                 <Grid item key={index} xs={12}>
                  <PlaceDetails place={place} />
                 </Grid>
             ))}
            </Grid>
        </div>
    );
}
 export default List;