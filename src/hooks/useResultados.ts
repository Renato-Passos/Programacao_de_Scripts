import { useContext } from "react";
import { Contexto } from "../contexts";

function useResultados() {
    const context = useContext(Contexto);
    return context;
}

export default useResultados;