import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from "./styles";



const Header = () =>{
    const classes = useStyles();
    return(
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                   Ayudante de viajes
                </Typography>
            </Toolbar>
            <Box display="flex" >
                <Typography variant="h6" className={classes.title}>
                   Explora la ciudad
                </Typography>
                {/*<Autocomplete>*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                    </div>
                    <InputBase placeholder="Busca un lugar" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                {/*</Autocomplete>*/}
            </Box>

        </AppBar>

    );
}
 export default Header;