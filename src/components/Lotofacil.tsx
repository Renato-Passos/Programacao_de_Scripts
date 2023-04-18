import React, { useEffect, useState } from "react";
import useResultados from "../hooks/useResultados";



const Lotofacil = () => {

  let re : { lotofacil?: { 
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

  return (
    <div>

    </div>
  );
};

export default Lotofacil;
