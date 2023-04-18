import React, { useEffect, useState } from "react";
import useResultados from "../hooks/useResultados";

function MegaSena() {
    let re : { 
        megasena?: { 
        acumulado?: boolean; 
        dezenas?: Array<Number>; 
        dataApuracao?: String;
        dataPorExtenso?: String;
        dataProximoConcurso?: String;
        numeroDoConcurso?: Number;
        quantidadeGanhadores?: Number;
        valorPremio?: Number;}  } = {};
    const { resultado } = useResultados();
    useEffect(() => { re = (resultado); }, []);
    useEffect(() => { console.log(re.megasena); }, [re]);

    return (
        <div>
        
            
        </div>
    );
}

export default MegaSena;
