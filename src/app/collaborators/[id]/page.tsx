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

        <div id="#beneficios" className={styles.formContainer}>
          <h3 className="text-2xl">Benefícios</h3>
        </div>  

        <p className="h-8"> </p>

        <div id="#descontos" className={styles.formContainer}>
          <h3 className="text-2xl">Descontos</h3>
        </div>  
      </div>
    </div>
    
  );
};

export default SingleUserPage;