import { createContext } from "react";
//Context fih User Data 
const UserContext = createContext({
  user: {userEmail:"",userPassword:""},
  setUser: () => {},
});

export default UserContext;
