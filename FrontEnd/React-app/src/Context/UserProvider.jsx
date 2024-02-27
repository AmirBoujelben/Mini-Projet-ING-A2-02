//Provider Used to wrap components win bech ykoun el User Information Accessible
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const handleSetUser = (newUser) => setUser(newUser);
  
    return (
      <UserContext.Provider value={{ user, setUser: handleSetUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
export default UserProvider;
  