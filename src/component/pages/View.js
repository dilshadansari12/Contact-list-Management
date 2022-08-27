import React from 'react';
import { useState, useEffect } from "react";
import { variant, Button, Grid, Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";


const View = () => {
    const IDS = useParams();
    // console.log(id);
    const [Ldata, EditLdata] = useState([]);

    useEffect(() => {
        // alert("i run ")
        APIDatas();
    },[])

    const APIDatas = () => {
        let newDatas = fetch(`http://localhost:4444/contect/${IDS.id}`).then((data) => {
            return data.json();
        }).then((re) => {
            // console.log(re);
            EditLdata(re);
            // console.log(re)
        }).catch((rejected) => {
            console.log("somthing is rong")
        })
    }

    // console.log(Ldata);
    // console.log(IDS.id)



    return (
        <>

            <Grid item xs={12}>
                <Box textAlign="center" p={1} style={{ backgroundColor: "#172a6f" }} mb={2} m >
                    <Typography variant="h5" >Saved Contect</Typography>
                </Box>

                <TableContainer  >
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#616161" }}>
                                <TableCell align="center" style={{ color: "white" }} >No</TableCell>
                                <TableCell align="center" style={{ color: "white" }} >Name</TableCell>
                                <TableCell align="center" style={{ color: "white" }} >Email</TableCell>
                                <TableCell align="center" style={{ color: "white" }} >Phone number</TableCell>

                            </TableRow>
                        </TableHead>
                                <TableBody m={0}>
                                    <TableRow key={IDS.id}>
                                        <TableCell align="center">{IDS.id}</TableCell>
                                        <TableCell align="center">{Ldata.name}</TableCell>
                                        <TableCell align="center">{Ldata.email}</TableCell>
                                        <TableCell align="center">{Ldata.number}</TableCell>
                                    </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>


            <Grid itex xs={6} style={{widht:"100%"}} m={2} >
                <Button variant="contained" disableElevation justify="center" style={{marginLeft:"45%"}} ><Link to="/" style={{ color: "white", textDecoration: "none" }}>GO Back Home</Link></Button>
            </Grid>
        </>

    )
};

export default View;