import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import DoughnutChart from "./DoughnutChart";
// makeStyles here
const useStyles = makeStyles({
  card:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"25px",
    width:"300px"
  },
  head:{
    fontWeight:800,
  },
  details:{
    fontWeight:500
  }
});

const Country=({recovered,confirmed,deaths})=>{

const classes = useStyles();
  return(<Container className={classes.card}>
      <h1 className={classes.head}>INDIA</h1>
      <h3 className={classes.details}>confirmed : {confirmed.value}</h3>
      <h3 className={classes.details}>Deaths : {deaths.value}</h3>
      <h3 className={classes.details}>recovered : {recovered.value}</h3>
      </Container>)
      
}
export default Country;