import { fetchDepartments, fetchRoles } from "@/actions/empresa/departamentos/fetchDepartments";
import { fetchCompany } from "@/actions/empresa/fetchCompany";

const CompanyPage = async () => {

  const company = await fetchCompany();
  const departments = await fetchDepartments();

  console.log(departments);

  const fetchRolesForDepartment = async (departmentId: number) => {
    return await fetchRoles(departmentId);
  };

  return (
    <div>
      <h3 className="text-2xl">Empresa</h3>
      <div>
        <h2>{company.nomeFantasia}</h2>
        <p>{company.razaoSocial}</p>
      </div>

      <p className="h-8"> </p>

      <div id="departamentos">
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
      </div>
    </div>
  );
}

export default CompanyPage;