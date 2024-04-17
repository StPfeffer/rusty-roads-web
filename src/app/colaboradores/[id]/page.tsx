import { fetchCollaborator } from "@/actions/colaboradores/fetchCollaborators";
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import Image from "next/image";
import { formatarData } from "@/utils/formatarData";
import Link from "next/link";

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

        <p className="h-8"> </p>

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
                  <td className="p-2">{beneficio.valor == 0 ? beneficio.beneficio.valorPadrao : beneficio.valor}</td>
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
                  <td className="p-2">{desconto.valor}</td>
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
                <td className="p-2">{collaborator.contrato.cargaHoraria}</td>
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

          <table className="w-full ring-2  ring-[#2e374a] rounded-lg mt-8">
            <thead>
              <tr className="text-gray-500 ">
                <th className="py-1 pb-2 overflow-hidden bg-[#151c2c] rounded-tl-lg w-64">Nome</th>
                <th className="py-1 overflow-hidden bg-[#151c2c] w-32">Nascimento</th>
                <th className="py-1 overflow-hidden bg-[#151c2c] w-32">Parentesco</th>
                <th className="py-1 overflow-hidden bg-[#151c2c] rounded-tr-lg w-24">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                  <td className="p-2">t</td>
                  <td className="p-2">t</td>
                  <td className="p-2">t</td>
                  <td className="p-2 flex justify-end">
                    <button className="flex items-center bg-slate-800 hover:bg-slate-700 text-white rounded p-1 px-2">🖊</button>
                  </td>
                </tr>
            </tbody>
          </table>  
        </div>  
      </div>
    </div>
  );
};

export default SingleUserPage;