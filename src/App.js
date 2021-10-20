import React, {useState, useEffect} from "react";
import "./style.css";
import CountryInfo from './components/CountryInfo/CountryInfo';
import FullInfo from './components/FullInfo/FullInfo';

export default function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[]);


  const handleClick = (cnt) =>{
    console.log('Country Added', cnt)
    const newCountry = [...country, cnt];
    setCountry(newCountry);
  }

  return (
    <div>
      <h2>Country Loaded: {countries.length}</h2>
      <h3>Country Added: {country.length}</h3>
      <FullInfo country={country} />
      {
        countries.map(country => <CountryInfo country={country} handleClick={handleClick}></CountryInfo>)
      }
    </div>
  );
}
