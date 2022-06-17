//Reducer for app information Initialize State
const initState = {
  selectedCompanyIndex: -1,
  companyList: [],
  selectedCompany:null,
};

//Define Actions
const mainReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "SET_COMPANIES":
      return {
        ...state,
        companyList: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selectedCompanyIndex: action.payload,
        selectedCompany: state.companyList[action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
