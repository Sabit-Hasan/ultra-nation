import React from 'react';

export default function FullInfo(props){

  const country = props.country;

  const totalPopulation = country.reduce((totalPopulation, cnt) => totalPopulation + cnt.population, 0);

  return(
    <div>
      <h4>Total Population: {totalPopulation}</h4>
    </div>
  );
}