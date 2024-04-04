import { fetchCollaborators } from "@/actions/colaboradores/fetchCollaborators";
import styles from "../../components/collaborator/collaborators.module.css";
import Image from "next/image";
import Link from "next/link";
import { formatarData } from "@/utils/formatarData";

import React from "react";
import { fetchDiscounts } from "@/actions/descontos/fetchDiscounts";

const DiscountsPage = async () => {
  const discounts = await fetchDiscounts();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button className={styles.addButton}>Adicionar</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Admissão</td>
            <td>Cargo</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {collaborators.map((collaborator) => (
            <tr key={collaborator.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {collaborator.nome}
                </div>
              </td>
              <td>{collaborator.email}</td>
              <td>{formatarData(collaborator.admissao?.toString())}</td>
              {/* <td>{collaborator.isAdmin ? "Admin" : "Client"}</td> */}
              {/* <td>{collaborator.isActive ? "active" : "passive"}</td> */}
              <td>{/*collaborator.cargo.descricao  */} teste</td>
              <td>
                <div className={styles.buttons}>
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
  )
}

export default Discounts;