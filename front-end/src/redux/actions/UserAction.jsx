
export const getUserName = (userData)=> {
  return {
    type: 'GET_USER_NAME',
    // payload: userData
    payload: {
      userData,
      createdAt: new Date().toISOString()
    }
  }
}

export const sentUserData = (userData) => {
  return {
    type: 'SENT_USER_DATA',
    payload: {
      userData,
      createdAt: new Date().toISOString()
    }
  }
}

export const editUserName = (userName)=> {
  return{
    type: 'EDIT_USER_NAME',
    // payload: userName
    payload: {
      userName,
      createdAt: new Date().toISOString()
    }
  }
}