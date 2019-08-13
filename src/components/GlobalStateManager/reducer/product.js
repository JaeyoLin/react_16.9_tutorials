const productsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: state.products.concat({ id: state.products.length }),
      }
    default:
      return state
  }
}

export default productsReducer;
