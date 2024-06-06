const initialState = {
  status: "user",
  userData: {},
  createdAt: null
}

export default function userReducer(state= initialState, action){
  switch (action.type){
    case 'GET_USER_NAME':
      return {
        ...state,
        status: "getSuccessful",
        // userData: action.payload,
        userData: {
          ...state.userData,
          userName: action.payload.userData.userName
        },
        createdAt: action.payload.createdAt
      }
    case 'SENT_USER_DATA':
      return{
        ...state,
        status: "sentUserData",
        userData: {
          ...state.userData,
          userName: action.payload.userData.userName
        },
        createdAt: action.payload.createdAt
      }
    case 'EDIT_USER_NAME':
      return{
        ...state,
        status: "editSuccessful",
        userData: {
          ...state.userData,
          userName: action.payload.userName
        },
        createdAt: action.payload.createdAt
      }
    case 'LOG_OUT': {
      return initialState;
    }
    default:
      return state;
    }
}