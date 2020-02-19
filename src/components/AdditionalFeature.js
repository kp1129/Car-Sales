import React from 'react';

const AdditionalFeature = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    return { type: "BUY_ITEM", payload: item}
  }; 

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
