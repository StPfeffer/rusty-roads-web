import { fetchCollaborator } from "@/actions/colaboradores/fetchCollaborators";
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import Image from "next/image";
// import { updateCollaborator } from "@/actions/updateCollaborator";

const SingleUserPage = async ({ params }) => {

  const { id } = params;
  const collaborator = await fetchCollaborator(id);

  return (
    <div className={styles.container}>
      <div className="flex-col w-1/3 h-screen ">
        {/* <div className="bg-padrao2 p-4 rounded-lg mb-4">
          <div className="">
            <ul>
                <li className="bg-padrao3 p-1 flex justify-center rounded-lg mb-1 hover:bg-padrao4">
                  <button type="button">Informações</button>
                </li>
                <li className="bg-padrao3 p-1 flex justify-center rounded-lg mb-1 hover:bg-padrao4"><a href="#beneficios">Benefícios</a></li>
                <li className="bg-padrao3 p-1 flex justify-center rounded-lg mb-1 hover:bg-padrao4"><a href="#descontos">Descontos</a></li>
            </ul>
          </div>
        </div> */}

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
            <input type="text" name="admissao" placeholder={collaborator.admissao?.toString()} />
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
            {/* <label>Is Admin?</label> */}
            {/* <select name="isAdmin" id="isAdmin">
              <option value={true} selected={collaborator.isAdmin}>Yes</option>
              <option value={false} selected={!collaborator.isAdmin}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={collaborator.isActive}>Yes</option>
              <option value={false} selected={!collaborator.isActive}>No</option>
            </select> */}
            <button>Atualizar</button>
          </form>
        </div> 

        <p className="h-8"> </p>

        <div id="#contrato" className={styles.formContainer}>
          <h3 className="text-2xl">Contrato</h3>
          <form className={styles.form}>
            <div className="mt-4 flex justify-between">
              <div className="flex-col w-96">
                <label >Tipo de contrato</label>
                <input className="w-full" type="text" name="tipo" placeholder={collaborator.contrato.tipo} />
              </div>
              <div className="flex-col w-96 ">
                <label>Filiação</label>
                <input className="w-full" type="text" name="filiacao" placeholder={collaborator.contrato.tipoFiliacao} />
              </div>
              <div className="flex-col w-2/12">
                <label >Carga Horária Semanal</label>
                <input className="w-full" type="text" name="cargaHoraria" placeholder={collaborator.contrato.cargaHoraria} />
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="flex-col w-96">
                <label className="">Cargo</label>
                <input  className="w-full" type="text" name="cargo" placeholder={collaborator.contrato.cargo.nome} />
              </div>
              <div className="flex-col w-2/12">
                <label className="">Nível</label>
                <input  className="w-full" type="text" name="cargo" placeholder={collaborator.contrato.cargo.nivel} />
              </div>
              <div className="flex-col  w-96">
                <label className="">Salário base</label>
                <input  className="w-full" type="text" name="cargo" placeholder={collaborator.contrato.cargo.salarioBase} />
              </div>
            </div>
          </form>
        </div>

        <p className="h-8"> </p>

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

        <p className="h-8"> </p>

        <div id="#beneficios" className={styles.formContainer}>
          <h3 className="text-2xl">Benefícios</h3>

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

        <p className="h-8"> </p>

        <div id="#descontos" className={styles.formContainer}>
          <h3 className="text-2xl">Descontos</h3>

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