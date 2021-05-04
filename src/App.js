import React, { useState, useEffect } from "react";
import "./style.css";
import Global from "./components/Global";
import Country from "./components/Country";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import DoughnutChart from "./components/DoughnutChart";
import DoughnutChartGlobal from "./components/DoughnutChartGlobal";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
export default function App() {
  const [datas, setDatas] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  useEffect(() => {
    fetchGlobalData();
    fetchConfirmed();
    fetchRecovered();
    fetchDeaths();
  }, []);
  const fetchGlobalData = async () => {
    const res = await fetch("https://covidapi.info/api/v1/global");
    const data = await res.json();
    setDatas(data.result);
  };
  const fetchDeaths = async () => {
    const res = await fetch("https://covid19.mathdro.id/api/countries/IND");
    const data = await res.json();
    setDeaths(data.deaths);
  };
  const fetchRecovered = async () => {
    const res = await fetch("https://covid19.mathdro.id/api/countries/IND");
    const data = await res.json();
    setRecovered(data.recovered);
  };
  //console.log(datas);//https://covid19.mathdro.id/api/countries/IND/
  const fetchConfirmed = async () => {
    const res = await fetch("https://covid19.mathdro.id/api/countries/IND");
    const data = await res.json();
    setConfirmed(data.confirmed);
  };
  //https://restcountries.eu/rest/v2/all

  return (
    <div className="Container">
      <AppBar position="static">
        <Toolbar>
          <img src="https://www.flaticon.com/svg/vstatic/svg/2833/2833315.svg?token=exp=1620123834~hmac=41d563611072accd229a418911ae1120" />
        </Toolbar>
      </AppBar>
      <Card>
        <Global datas={datas} />
        <DoughnutChartGlobal datas={datas} />
      </Card>

      <Card>
        <Country recovered={recovered} confirmed={confirmed} deaths={deaths} />
        <DoughnutChart
          recovered={recovered}
          confirmed={confirmed}
          deaths={deaths}
        />
      </Card>
    </div>
  );
}
