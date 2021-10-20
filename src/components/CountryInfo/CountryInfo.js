import React from 'react';

export default function CountryInfo(props) {
  const { name, population, flags } = props.country;
  const handleClick = props.handleClick;

  const flagsStyle = {
    border: '1px solid black',
    paddingLeft: '30px',
    paddingBottom: '30px',
    paddingTop: '30px',
  };

  return (
    <div>
      <div style={flagsStyle}>
        <img style={{ width: '150px' }} src={flags.png} alt="" />
        <h1>{name.common}</h1>
        <p>{population}</p>
        <button onClick={() => handleClick(props.country)}>Add Country</button>
      </div>
    </div>
  );
}
