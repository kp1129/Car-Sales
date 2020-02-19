export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const carPurchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      console.log(
        "BUY_ITEM",
        action.payload,
        "name: ",
        action.payload.name,
        "price: ",
        action.payload.price
      );
      let filteredOne = state.additionalFeatures.filter(obj => obj.id !== action.payload.id)
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: [...filteredOne]
      };

    case "REMOVE_FEATURE":
      let addMeBack = action.payload;
      let filteredTwo = state.car.features.filter(
        item => item.id !== addMeBack.id
      );
      return {
        ...state,
        car: {
          ...state.car,
          features: [...filteredTwo]
        },
        additionalPrice: state.additionalPrice - action.payload.price,
        additionalFeatures: [...state.additionalFeatures, addMeBack]
      };
    default:
      return state;
  }
};
