import { fetchCollaborator } from "@/actions/colaboradores/fetchCollaborators";
import styles from "../../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import Image from "next/image";
// import { updateCollaborator } from "@/actions/updateCollaborator";

const SingleUserPage = async ({ params }) => {

  const { id } = params;
  const collaborator = await fetchCollaborator(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {collaborator.nome}
      </div>

      <div className={styles.formContainer}>
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
    </div>
  );
};

export default SingleUserPage;