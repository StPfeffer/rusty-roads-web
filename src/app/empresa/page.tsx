import { fetchDepartments } from "@/actions/empresa/departamentos/fetchDepartments";
import { fetchCompany } from "@/actions/empresa/fetchCompany";
import styles from "../../components/collaborator/singleCollaborator/singleCollaborator.module.css";
import { fetchRoles } from "@/actions/empresa/cargos/fetchRoles";

const CompanyPage = async () => {

  const company = await fetchCompany();
  const departments = await fetchDepartments();
  const roles = await fetchRoles();

  console.log(departments);

  return (
    <div className="space-y-4">
      <div id="informacoes-empresa" className="bg-padrao2 flex-col mt-6 rounded-lg">
        <div id="informacoes" className={styles.formContainer}>
          <h3 className="text-3xl font-semibold mb-4">{company.nomeFantasia}</h3>
          <form className={styles.form}>  
            <div className=" flex space-x-8">
              <div className="flex-col w-80">
                <label>Razão Social</label>
                <input className="w-full" type="text" name="nome" placeholder={company.razaoSocial} />
              </div>
              <div className="flex-col w-72">
                <label>CNPJ</label>
                <input className="w-full" type="email" name="email" placeholder={company.cnpj} />
              </div>
              <div className="flex-col flex-1">
                <label>Endereço</label>
                <input className="w-full" type="text" name="admissao" placeholder={company.endereco} />
              </div>
            </div>

            <div className="flex space-x-8">
              <div className="flex-col w-6/12">
                <label>Regime Tributário</label>
                <input className="w-full"  type="text" name="genero" placeholder={company.regimeTributario} />
              </div>
              <div className="flex-col w-5/12">
                <label>Inscrição Estadual</label>
                <input className="w-full" type="text" name="cpf" placeholder={company.inscricaoEstadual} />
              </div>
              <div className="flex-col w-5/12">
                <label>Inscrição Municipal</label>
                <input className="w-full" type="text" name="cnh" placeholder={company.inscricaoMunicipal} />
              </div>
            </div>

            <button className="mb-2" disabled>Atualizar</button>
          </form>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <div id="departamentos" className="bg-padrao2 flex-col p-4 rounded-lg w-2/6">
          <h3 className="text-2xl mb-2">Departamentos</h3>
          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Nome</td>
                <td className="pt-2.5 font-bold p-2">Descrição</td>
              </tr>
            </thead>
            <tbody>
              {departments.map((departamento) => (
              <tr className="bg-padrao3 space-y-2" key={departamento.id}>
                <td className="p-2 w-60 text-lg">{departamento.nome}</td>
                <td className="p-2 text-sm">{departamento.descricao}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id="cargos" className="bg-padrao2 flex-col p-4 rounded-lg flex-1">
          <h3 className="text-2xl mb-2">Cargos</h3>
          <table className="w-full">
            <thead>
              <tr>
                <td className="pt-2.5 font-bold p-2">Nome</td>
                <td className="pt-2.5 font-bold p-2">Descrição</td>
                <td className="pt-2.5 font-bold p-2">Salário Base</td>
                <td className="pt-2.5 font-bold p-2">Detalhes</td>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
              <tr className="" key={role.id}>
                <td className="p-2 w-64">{role.nome} {role.nivel}</td>
                <td className="p-2">{role.descricao}</td>
                <td className="p-2 w-32">{role.salarioBase}</td>
                <td className="p-2 w-32">
                  <div className="flex gap-2.5">
                    {/* <Link href={`/colaboradores/${collaborator.id}`}> */}
                      <button disabled className={`${styles.button} ${styles.view}`}>
                        Ver mais
                      </button>
                    {/* </Link> */}
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* <div id="departamentos">
        <h3 className="text-2xl">Departamentos</h3>
        {departments.map(async (departamento) => (
          <div key={departamento.id}>
            <div>{departamento.nome}</div>
            <div>{departamento.descricao}</div>

            <p className="h-8"> </p>

            <div id="cargos">
              <h3 className="text-2xl">Cargos</h3>
              {await fetchRolesForDepartment(departamento.id).then((roles) => (
                <div>
                  {roles.map((role) => (
                    <div key={role.id}>
                      <div>{role.nome}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default CompanyPage;