import React from 'react';
import Image from 'next/image'; // Importe conforme necessário
import Link from 'next/link'; // Importe conforme necessário

interface Props<T> {
  dados: T[];
  colunas: (keyof T)[];
}

function Tabela<T>({ dados, colunas }: Props<T>) {
  const formatarData = (data: string | undefined) => {
    // Implemente a lógica de formatação da data conforme necessário
    return data ? new Date(data).toLocaleDateString() : '';
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          {colunas.map((coluna) => (
            <th key={String(coluna)}>{String(coluna)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {colunas.map((coluna) => (
              <td key={String(coluna)}>
                {coluna === 'nome' ? (
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className="round object-cover"
                    />
                    {item[coluna]}
                  </div>
                ) : coluna === 'admissao' ? (
                  formatarData(String(item[coluna]))
                ) : (
                  String(item[coluna])
                )}
              </td>
            ))}
            <td>
              <div className="flex gap-2.5">
                <Link href={`/details/${item.id}`}>
                  <button className="button view">Detalhes</button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
