import React from 'react';
import { Typography, Box, Grid, Tooltip, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";
import { useState, useEffect } from 'react';


const List = () => {

    const [detals, editdetaisl] = useState([]);

    useEffect(() => {

        APIData();


    },[])

    // console.log(detals)

    const APIData = () => {
        let newData = fetch("http://localhost:4444/contect").then((data) => {
            return data.json();
        }).then((re) => {
            // console.log(re);
            editdetaisl(re);
        }).catch((rejected) => {
            console.log("rejectd")})}


    const Deletitem = (id)=>{

        try{
            axios.delete(`http://localhost:4444/contect/${id}` )
            var newList= detals.filter((item)=>{
                return item.id !== id
            })
           }catch(eroor){
                   console.log("somthing is wrong")
           }
           editdetaisl(newList)
    }

    



    return (
        <>
            <Grid item md={6} xs={12}>
                <Box textAlign="center" p={1} style={{ backgroundColor: "#172a6f", color: "white" }} mb={2} m >
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
                                <TableCell align="center" style={{ color: "white" }} >Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody m={0}>

                       {detals.map((val , ind , ar)=>{
                            return(
                            <TableRow key={val.id}>
                                <TableCell align="center">{ind + 1}</TableCell>
                                <TableCell align="center">{val.name}</TableCell>
                                <TableCell align="center">{val.email}</TableCell>
                                <TableCell align="center">{val.number}</TableCell>
                                <TableCell align="center">
                                    <Tooltip title="view">
                                        <IconButton><Link to={`/view/${val.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">
                                        <IconButton><Link to={`/edit/${val.id}`}><EditIcon color="primary" /></Link></IconButton>
                                    </Tooltip>
                                    <Tooltip title="Deleted">
                                        <IconButton onClick={ ()=> Deletitem (val.id) }><DeleteIcon color="primary" /></IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>



        </>
    )
}

export default List;