import { createContext } from "react";
import useUserProvider from "../hooks/useUserProvider";

const UserContext = createContext({});

export function UserProvider(props) {
  const valuesProvider = useUserProvider();

  return (
    <UserContext.Provider value={valuesProvider}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
