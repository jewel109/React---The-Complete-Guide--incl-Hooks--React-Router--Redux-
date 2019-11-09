import * as actionTypes from "../../store/actions/actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // ONE WAY OF CHANGING ARRAYS IMMUTABLY
      // const id = 2;
      // const updatedArray = [...state.results];
      // updatedArray.splice(id, 1);

      // ANOTHER WAY OF CHANGING ARRAYS IMMUTABLY
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;