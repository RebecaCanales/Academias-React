import React from 'react';

const Buttons = props => {
  //const [click, setClick] = useState("All");

  const handleClick = value => {
    props.handleCategory(value);
    //console.log(value)
  };

  return (
    <div className="main-container">
      <div>
        <button
          value="all"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          All
        </button>
        <button
          value="travel"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Travel
        </button>
        <button
          value="lifestyle"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Lifestyle
        </button>
        <button
          value="business"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Business
        </button>
        <button
          value="food"
          onClick={e => {
            handleClick(e.target.value);
          }}
        >
          Food
        </button>
        <button
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
