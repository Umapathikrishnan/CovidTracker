import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// makeStyles here
const useStyles = makeStyles({
  card:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    padding:"25px",
    width:"300px"
  }
});


const DoughnutChartGlobal = ({datas}) =>
{
  const classes=useStyles();
const data = {

  labels: ['No.of people recovered','No.of people confirmed','No.of people deaths'],
  datasets: [
    {
      label: '# of Votes',
      data: [datas.recovered,datas.recovered,datas.deaths],
      backgroundColor: [
      '#75f72f',
      '#f59b00',
      '#c20006'
      ],
      borderColor: [
      '#ebebeb' //not used here since border width is set to 0
      ],
      borderWidth: 0,
    },
  ],
};
//console.log("i too work here",recovered.value);
return(
  <>
    <div className='header'>
    
      <Card className={classes.card}>
       <Doughnut data={data}/>
      </Card>
    </div>
    
  </>
);
}

export default DoughnutChartGlobal;