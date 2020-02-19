import React from 'react';
import { connect } from "react-redux";
import { buyItem } from "../actions/carPurchaseActions";

const AdditionalFeature = props => {

  const buyItem = item => {
    props.buyItem(props.feature);    
  }; 

  return (
    <li>
      <button className="button" onClick={() => {
        console.log('onclick: ', props.feature);
        props.buyItem(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {buyItem})(AdditionalFeature);
