import { useEffect } from "react";
import { api } from "../../services/api";
import * as S from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$1.000,00</td>
            <td>Desenvolvimento</td>
            <td>26/07/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$500,00</td>
            <td>Casa</td>
            <td>12/06/2022</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
