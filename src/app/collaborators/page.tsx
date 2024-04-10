import { fetchCollaborators } from "@/actions/colaboradores/fetchCollaborators";
import styles from "../../components/collaborator/collaborators.module.css";
import Image from "next/image";
import Link from "next/link";
import { formatarData } from "@/utils/formatarData";

const UsersPage = async () => {
  const collaborators = await fetchCollaborators();

  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center">
        <Link href="/collaborators/add">
          <button className={styles.addButton}>Adicionar</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="pt-2.5 font-bold p-2">Nome</td>
            <td className="pt-2.5 font-bold p-2">Email</td>
            <td className="pt-2.5 font-bold p-2">Admissão</td>
            <td className="pt-2.5 font-bold p-2">Cargo</td>
            <td className="pt-2.5 font-bold p-2">Status</td>
            <td className="pt-2.5 font-bold p-2">Action</td>
          </tr>
        </thead>
        <tbody>
          {collaborators.map((collaborator) => (
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
                  {collaborator.nome}
                </div>
              </td>
              <td className="p-2">{collaborator.email}</td>
              <td className="p-2">{formatarData(collaborator.admissao?.toString())}</td>
              {/* <td>{collaborator.isAdmin ? "Admin" : "Client"}</td> */}
              {/* <td>{collaborator.isActive ? "active" : "passive"}</td> */}
              <td className="p-2">{collaborator.contrato.cargo.nome}</td>
              <td className="p-2">
                <div className="flex gap-2.5">
                  <Link href={`/collaborators/${collaborator.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Detalhes
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;