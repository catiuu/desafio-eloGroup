import { useState } from "react";


function useUserProvider() {
  const [name, setName] = useState("");
  const [leads, setLeads] = useState([]);
 

  // const [token, setToken] = useLocalStorage("token", "");

  return {
    name,
    setName,
    leads,
    setLeads,
    // valueInLocalStorage,
    // setValueInLocalStorage,
    // token,
    // setToken,
  };
}

export default useUserProvider;
