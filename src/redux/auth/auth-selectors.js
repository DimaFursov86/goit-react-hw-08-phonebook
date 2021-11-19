const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUseremail = (state) => state.auth.user.email;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUseremail,
  getIsFetchingCurrent,
};
export default authSelectors;
