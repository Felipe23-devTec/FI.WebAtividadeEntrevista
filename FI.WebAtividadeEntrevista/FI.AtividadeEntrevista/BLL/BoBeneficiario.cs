using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class BoBeneficiario
    {
        /// <summary>
        /// Inclui um novo beneficiario
        /// </summary>
        /// <param name="beneficiario">Objeto de beneficiario</param>
        public long Incluir(DML.Beneficiario beneficiario)
        {
            DAL.Beneficiarios.DaoBeneficiario ben = new DAL.Beneficiarios.DaoBeneficiario();
            return ben.Incluir(beneficiario);
        }
        public bool VerificarExistenciaBeneficiario(string CPF, long idCliente)
        {
            DAL.Beneficiarios.DaoBeneficiario ben = new DAL.Beneficiarios.DaoBeneficiario();
            return ben.VerificarExistenciaBeneficiario(CPF, idCliente);
        }
        public List<DML.Beneficiario> Listar(string CPF, long idCliente)
        {
            DAL.Beneficiarios.DaoBeneficiario ben = new DAL.Beneficiarios.DaoBeneficiario();
            return ben.Listar(CPF,idCliente);
        }

        public List<DML.Beneficiario> Consultar()
        {
            DAL.Beneficiarios.DaoBeneficiario ben = new DAL.Beneficiarios.DaoBeneficiario();
            return ben.Consultar();
        }
        public void Excluir(string cpf)
        {
            DAL.Beneficiarios.DaoBeneficiario ben = new DAL.Beneficiarios.DaoBeneficiario();
            ben.Excluir(cpf);
        }
    }
}
