import axios from "axios";

export const loteriaService = () => {
    return axios.get(`https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados`);
}
