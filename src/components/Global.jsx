import React from "react";
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  card:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"25px",
    width:"300px",
    textAlign:"center",
  },
  head:{
    fontWeight:800,
  },
  details:{
    fontWeight:500
  }
});
const Global=({datas})=>{

const classes = useStyles();
  return(<Container className={classes.card}>
      <h1 className={classes.head}>Global</h1>
      <h3 className={classes.details}>confirmed : {datas.confirmed}</h3>
      <h3 className={classes.details}>Deaths : {datas.deaths}</h3>
      <h3 className={classes.details}>recovered : {datas.recovered}</h3>

      </Container>)
      
}
export default Global;