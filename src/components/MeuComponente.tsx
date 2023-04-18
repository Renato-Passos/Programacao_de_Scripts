import React, { useState } from "react";
import MegaSena from "./MegaSena";
import Lotofacil from "./Lotofacil";

interface MeuComponenteProps {
}

const MeuComponente: React.FC<MeuComponenteProps> = () => {

  return (
    <div className="row">
      <MegaSena />
      <Lotofacil />
    </div>
  );
};

export default MeuComponente;
