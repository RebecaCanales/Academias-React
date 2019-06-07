import React from 'react';

const Buttons = props => {
  const handleClick = value => {
    props.handleCategory(value);
  };

  return (
    <div className="main-container">
      <div>
        <button
          style={{ padding: '10px 15px' }}
          variant="contained"
          value="all"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          All
        </button>
        <button
          style={{ padding: '10px 15px' }}
          variant="contained"
          value="travel"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Travel
        </button>
        <button
          style={{ padding: '10px 15px' }}
          variant="contained"
          value="lifestyle"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Lifestyle
        </button>
        <button
          style={{ padding: '10px 15px' }}
          variant="contained"
          value="business"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Business
        </button>
        <button
          style={{ padding: '10px 15px' }}
          variant="contained"
          value="food"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Food
        </button>
        <button
          style={{ padding: '10px 15px' }}
          variant="contained"
          value="work"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Work
        </button>
      </div>
    </div>
  );
};

export default Buttons;
