export const loginUser = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };
  
  export const logoutUser = () => {
    localStorage.clear();
  };
  
  export const isLoggedIn = () => !!localStorage.getItem("token");
  
  export const getUser = () =>
    JSON.parse(localStorage.getItem("user"));
  