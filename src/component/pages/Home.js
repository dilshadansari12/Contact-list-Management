import React from 'react';
import { Typography, Box, Grid, TextField, Button, Body, avatarGroupClasses } from "@mui/material";
import List from "./List";
import {useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";





const Home = () => {
    const [Formdata , Editformdata]=useState({
        name:"",
        email:"",
        number:""
    });

 
const changeFunc = (e)=>{
    Editformdata({
        ...Formdata , [e.target.name]:e.target.value
    });

   
    
}

const submited = (e)=>{
    e.preventDefault();
   try{
     axios.post("http://localhost:4444/contect",Formdata )
    }catch(eroor){
            console.log("somthing is wrong")
    }

   
}






    return (
        <>           <Box textAlign="center" style={{ backgroundColor: "hsl(2012deg 100% 52%)", color: "white" }} p={2}>
            <Typography variant="h4"  >All Contects details</Typography>
        </Box>

            <Grid container justify="center"  >
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={1} style={{ backgroundColor: "hsl(27deg 90% 55%)" }} mb={2} m >
                        <Typography variant="h5"> Add Contect</Typography>
                    </Box>
                    {/* form area start */}
                    <form>
                        <Grid container justify="center" >
                            <Grid item xs={12} m >
                                <TextField autoComplete="Name" name="name" variant="outlined" required fullWidth id="Name"
                                    label="Name"  onChange={changeFunc}  />
                            </Grid>

                            <Grid item xs={12} m >
                                <TextField autoComplete="email" name="email" type="email" variant="outlined" required fullWidth id="email"
                                    label="email addres.."  onChange={changeFunc}  />
                            </Grid>

                            <Grid item xs={12} m >
                                <TextField autoComplete="number" name="number" type="number" variant="outlined" required fullWidth id="number"
                                    label="Enter Number.."  onChange={changeFunc}  />
                            </Grid>

                            <Box m={3}>
                                <Button type="submite" variant="contained" color='primary' fullWidth onClick={submited} >
                                   <Link to="/view">Add Contect</Link>
                                </Button>
                            </Box>


                        </Grid>


                    </form>

                </Grid>
                {/* form area end */}


                <List />

            </Grid>





        </>
    )
};


export default Home;
