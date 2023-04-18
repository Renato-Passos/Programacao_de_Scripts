import { createContext, useState, useEffect } from "react";
import { Props } from "../types";
import { loteriaService } from "../services/loteriaService";

const Contexto = createContext({} as Props);

function Provider({ children }: any) {
  useEffect(() => {
    loteriaService()
      .then(({data}) => {setResultado(data)})
      .catch(error => {console.log(error)})
  }, [])
 
  const [resultado, setResultado] = useState({});
 
  return (
    <Contexto.Provider value={{resultado}}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };
