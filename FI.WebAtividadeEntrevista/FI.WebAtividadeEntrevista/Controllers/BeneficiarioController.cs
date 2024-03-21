using FI.AtividadeEntrevista.BLL;
using WebAtividadeEntrevista.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FI.AtividadeEntrevista.DML;
using WebAtividadeEntrevista.Helpers;
using System.Web.Http.Results;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Incluir()
        {
            return View();
        }

        [HttpPost]
        public JsonResult BeneficiarioList()
        {
            var result = new RequestActionResult() { isOk = false };
            try
            {
                List<Beneficiario> beneficiarios = new BoBeneficiario().Consultar();
                result.isOk = true;
                result.bag = beneficiarios;
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }

        [HttpPost]
        public JsonResult Excluir(string Cpf)
        {
            var result = new RequestActionResult() { isOk = false };
            try
            {
                BoBeneficiario ben = new BoBeneficiario();
                ben.Excluir(Cpf);
                result.isOk = true;
                result.message = "Exclusao com sucesso!";
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }
    }
}