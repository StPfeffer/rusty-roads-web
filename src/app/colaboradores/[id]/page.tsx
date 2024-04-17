import { fetchCollaborator } from "@/actions/colaboradores/fetchCollaborators";
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import Image from "next/image";
import { formatarData } from "@/utils/formatarData";
import Link from "next/link";
import { formatarPrazo } from "@/utils/formatarPrazo";
import { calcularINSS } from "@/utils/calcularINSS";
import { calcularIRRF } from "@/utils/calcularIRRF";

const SingleUserPage = async ({ params }) => {

  const { id } = params;
  const collaborator = await fetchCollaborator(id);

  return (
    <div className={styles.container}>
      <div className="flex-col w-1/3 h-screen ">
        <div className={styles.infoContainer} >
          <div className={styles.imgContainer}>
            <Image src={"/noavatar.png"} alt="" fill />
          </div>
          {collaborator.nome}
        </div>

        <Link href={`/colaboradores/${collaborator.id}/ponto`}>
          <button className={styles.teste}>
            Ver ponto
          </button>
        </Link>

        R$ {collaborator.contrato.cargo.salarioBase}
      </div>

      <div className="w-full">
        <div id="informacoes" className={styles.formContainer}>
          <form className={styles.form}>
            <input type="hidden" name="id" value={collaborator.id} />
            <label>Nome</label>
            <input type="text" name="nome" placeholder={collaborator.nome} />
            <label>Email</label>
            <input type="email" name="email" placeholder={collaborator.email} />
            <label>Admissão</label>
            <input type="text" name="admissao" placeholder={formatarData(collaborator.admissao?.toString())} />
            <label>Gênero</label>
            <input type="text" name="genero" placeholder={collaborator.genero} />
            <div className="flex justify-between">
              <div className="flex-col w-5/12">
                <label>CPF</label>
                <input className="w-full" type="text" name="cpf" placeholder={collaborator.cpf} />
              </div>
              <div className="flex-col w-5/12">
                <label>CNH</label>
                <input className="w-full" type="text" name="cnh" placeholder={collaborator.cnh} />
              </div>
            </div>
            <button disabled>Atualizar</button>
          </form>
          </div>

        <p className="h-8" />

        <div id="#dependentes" className={styles.formContainer}>
          <h3 className="text-2xl">Dependentes</h3>
          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Nome</td>
                <td className="pt-2.5 font-bold p-2">Parentesco</td>
                <td className="pt-2.5 font-bold p-2">Nascimento</td>
                <td className="pt-2.5 font-bold p-2">Detalhes</td>
              </tr>
            </thead>
            <tbody>
              {collaborator.dependentes.map((dependente) => (
                <tr key={collaborator.id}>
                  <td className="p-2">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={"/noavatar.png"}
                        alt=""
                        width={40}
                        height={40}
                        className="round object-cover rounded-3xl mr-2"
                      />
                      {dependente.nome}
                    </div>
                  </td>
                  <td className="p-2">{dependente.parentesco}</td>
                  <td className="p-2">{formatarData(dependente.nascimento?.toString())}</td>
                  <td className="p-2">
                    <div className="flex gap-2.5">
                      <Link href={`/colaboradores/${collaborator.id}/dependentes/${dependente.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          Ver mais
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="h-8" />

        <div id="#beneficios" className={styles.formContainer}>
          <h3 className="text-2xl">Benefícios</h3>
          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Nome</td>
                <td className="pt-2.5 font-bold p-2">Descrição</td>
                <td className="pt-2.5 font-bold p-2">Valor</td>
                <td className="pt-2.5 font-bold p-2">Ativo</td>
                <td className="pt-2.5 font-bold p-2">Detalhes</td>
              </tr>
            </thead>
            <tbody>
              {collaborator.beneficios.map((beneficio) => (
                <tr key={collaborator.id}>
                  <td className="p-2">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={"/noavatar.png"}
                        alt=""
                        width={40}
                        height={40}
                        className="round object-cover rounded-3xl mr-2"
                      />
                      {beneficio.beneficio.nome}
                    </div>
                  </td>
                  <td className="p-2">{beneficio.beneficio.descricao}</td>
                  <td className="p-2">{beneficio.beneficio.tipoValor === 'MOEDA' ? 'R$ ' + (beneficio.valor == 0 ? beneficio.beneficio.valorPadrao : beneficio.valor) : (beneficio.valor == 0 ? beneficio.beneficio.valorPadrao : beneficio.valor) + '%'} / {formatarPrazo(beneficio.beneficio.prazo)}</td>
                  <td className="p-2">{beneficio.ativo ? "Sim" : "Não"}</td>
                  <td className="p-2">
                    <div className="flex gap-2.5">
                      <Link href={`/colaboradores/${collaborator.id}/beneficios/${beneficio.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          Ver mais
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  

        <p className="h-8" />

        <div id="#descontos" className={styles.formContainer}>
          <h3 className="text-2xl">Descontos</h3>
          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Nome</td>
                <td className="pt-2.5 font-bold p-2">Descrição</td>
                <td className="pt-2.5 font-bold p-2">Valor</td>
                <td className="pt-2.5 font-bold p-2">Ativo</td>
                <td className="pt-2.5 font-bold p-2">Detalhes</td>
              </tr>
            </thead>
            <tbody>
              {collaborator.descontos.map((desconto) => (
                <tr key={collaborator.id}>
                  <td className="p-2">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={"/noavatar.png"}
                        alt=""
                        width={40}
                        height={40}
                        className="round object-cover rounded-3xl mr-2"
                      />
                      {desconto.desconto.nome}
                    </div>
                  </td>
                  <td className="p-2">{desconto.desconto.descricao}</td>

                  {/* Gambiarra */}
                  <td className="p-2">{(desconto.desconto.tipoDesconto === 'INSS') ? 'R$ ' + calcularINSS(collaborator.contrato.cargo.salarioBase) : (desconto.desconto.tipoDesconto === 'IRRF') ? 'R$ ' + calcularIRRF(collaborator.contrato.cargo.salarioBase) : desconto.desconto.tipoValor === 'MOEDA' ? 'R$ ' + desconto.valor : desconto.valor + '%'} / {formatarPrazo(desconto.desconto.prazo)}</td>
                  <td className="p-2">{desconto.ativo ? "Sim" : "Não"}</td>
                  <td className="p-2">
                    <div className="flex gap-2.5">
                      <Link href={`/colaboradores/${collaborator.id}/descontos/${desconto.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          Ver mais
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="h-8" />

        <div id="contrato" className={styles.formContainer}>
          <h3 className="text-2xl">Contrato</h3>
          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Tipo</td>
                <td className="pt-2.5 font-bold p-2">Filiação</td>
                <td className="pt-2.5 font-bold p-2">Carga Horária</td>
                <td className="pt-2.5 font-bold p-2">Cargo</td>
                <td className="pt-2.5 font-bold p-2">Detalhes</td>
              </tr>
            </thead>
            <tbody>
              <tr key={collaborator.contrato.id}>
                <td className="p-2">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={"/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="round object-cover rounded-3xl mr-2"
                    />
                    {collaborator.contrato.tipo}
                  </div>
                </td>
                <td className="p-2">{collaborator.contrato.tipoFiliacao}</td>
                <td className="p-2">{collaborator.contrato.cargaHoraria}h Semanais</td>
                <td className="p-2">{collaborator.contrato.cargo.nome}</td>
                <td className="p-2">
                  <div className="flex gap-2.5">
                    <Link href={`/colaboradores/${collaborator.id}/contrato`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        Ver mais
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        

        <p className="h-8" />

        <div id="#dependentes" className={styles.formContainer}>
          <h3 className="text-2xl">Dependentes</h3>

          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Nome</td>
                <td className="pt-2.5 font-bold p-2">Nascimento</td>
                <td className="pt-2.5 font-bold p-2">Parentensco</td>
                <td className="pt-2.5 font-bold p-2">Detalhes</td>
              </tr>
            </thead>
            <tbody>
              {collaborator.dependentes.map((dependente) => (
              <tr key={collaborator.id}>
                <td className="p-2">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={"/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="round object-cover rounded-3xl mr-2"
                    />
                    {dependente.nome}
                  </div>
                </td>
                <td className="p-2">{dependente.nascimento}</td>
                <td className="p-2">{dependente.parentesco}</td>
                <td className="p-2">
                  <div className="flex gap-2.5">
                    <Link href={`/colaboradores/${collaborator.id}/contrato`}>
                      <button className={`${styles.button} ${styles.view}`} disabled>
                        Ver mais
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>  
      </div>
    </div>
  );
};

export default SingleUserPage;