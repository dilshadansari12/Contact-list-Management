import React from 'react';
import {useState, useEffect} from  "react";
import { useParams } from 'react-router-dom';
import { variant, Button , Grid , Box , Typography , TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Edit = () => {


    const EDID = useParams();
    const [EDITdata, Edata] = useState({
        name:"",
        email:"",
        number:""
    });
    // const [Formdata,Editformdata]=useState({
    //     name:"",
    //     email:"",
    //     number:""
    // });

   useEffect(()=>{
    APIDatass();
   },[])

    const APIDatass = () => {
        let newDatas = fetch(`http://localhost:4444/contect/${EDID.id}`).then((data) => {
            return data.json();
        }).then((re) => {
            Edata(re);
        }).catch((rejected) => {
            console.log("somthing is rong")
        })
    }

// console.log(EDID.i//d)/;

// console.log(Formdata)
// console.log(EDID);
// console.log(EDITdata)




const changeFunction = (e)=>{
    Edata({
        ...EDITdata , [e.target.name]:e.target.value
    })


    console.log(e.target.value);
    console.log(e.target.name)

};




const submiteds = (e)=>{
    e.preventDefault();
    // alert(Formdata)
    // console.log(Formd/ata);
   try{
     axios.put(`http://localhost:4444/contect/${EDID.id}`,EDITdata )
    }catch(eroor){
            console.log("somthing is wrong")
    }
}








    return (
        <>

            <Grid container justify="center" style={{width:"100%"}}  >
                <Grid item md={6} xs={12} style={{margin:"auto"}}>
                    <Box textAlign="center" p={1} style={{ backgroundColor: "hsl(27deg 90% 55%)" }} mb={2} m >
                        <Typography variant="h5"> Edit Contect</Typography>
                    </Box>
                    {/* form area start */}
                    <form>
                        <Grid container justify="center" >
                            <Grid item xs={12} m >
                                <TextField autoComplete="Name" name="name" variant="outlined" required fullWidth id="Name"
                                     value={EDITdata.name} onChange={changeFunction} />
                            </Grid>

                            <Grid item xs={12} m >
                                <TextField autoComplete="email" name="email" type="email" variant="outlined" required fullWidth id="email"
                                     value={EDITdata.email} onChange={changeFunction} />
                            </Grid>

                            <Grid item xs={12} m >
                                <TextField autoComplete="number" name="number" type="number" variant="outlined" required fullWidth id="number"
                                     value={EDITdata.number} onChange={changeFunction}   />
                            </Grid>
                        </Grid>
                      
                    <Grid item xs={12} m >
                         <Button variant="contained" type="submite" disableElevation justify="center" style={{width:"100%" , backgroundColor:"orange"}} onClick={submiteds}><Link to="/" style={{ color: "white", textDecoration: "none" }} >Update</Link></Button>
                      </Grid>
                      <Grid item xs={12} m >
                      <Button variant="contained" disableElevation justify="center" style={{width:"100%"}}><Link to="/" style={{ color: "white", textDecoration: "none" }} >GO Back Home</Link></Button>
                      </Grid>
                    </form>
                </Grid>
            </Grid>



            </>
            )
};

export default Edit;