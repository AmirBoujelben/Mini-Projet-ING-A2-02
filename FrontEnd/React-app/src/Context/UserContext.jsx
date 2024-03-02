import { createContext } from "react";
//Context fih User Data 
const UserContext = createContext({
  user: {userEmail:"",userPassword:"",Role:""},
  setUser: () => {},
});

export default UserContext;
