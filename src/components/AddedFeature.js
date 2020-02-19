import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/carPurchaseActions";

const AddedFeature = props => {

  const removeFeature = item => {
    props.removeFeature(props.feature);
  };

  return (
    <li>
      <button className="button" onClick={() => {
        console.log(props.feature);
        props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
