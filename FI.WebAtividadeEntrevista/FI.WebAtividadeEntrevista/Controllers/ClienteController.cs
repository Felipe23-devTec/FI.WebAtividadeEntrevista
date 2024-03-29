﻿using FI.AtividadeEntrevista.BLL;
using WebAtividadeEntrevista.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FI.AtividadeEntrevista.DML;
using WebAtividadeEntrevista.Helpers;

namespace WebAtividadeEntrevista.Controllers
{
    public class ClienteController : Controller
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
        public JsonResult Incluir(ClienteModel model)
        {
            BoCliente bo = new BoCliente();
            var result = new RequestActionResult() { isOk = false };
            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                var verificarCpfExistente = bo.VerificarExistencia(model.Cpf);
                if (verificarCpfExistente)
                {
                    result.isOk = false;
                    result.message = "Já existe esse CPF Cadastrado!";
                    return Json(result);
                }
                else
                {
                    model.Id = bo.Incluir(new Cliente()
                    {
                        CEP = model.CEP,
                        Cidade = model.Cidade,
                        Email = model.Email,
                        Estado = model.Estado,
                        Logradouro = model.Logradouro,
                        Nacionalidade = model.Nacionalidade,
                        Nome = model.Nome,
                        Sobrenome = model.Sobrenome,
                        Telefone = model.Telefone,
                        Cpf = model.Cpf,
                    });
                    if (model.Beneficiario != null)
                    {
                        var idCliente = model.Id;

                        BoBeneficiario beneficiario = new BoBeneficiario();
                        var existencia = beneficiario.VerificarExistenciaBeneficiario(model.Beneficiario.Cpf, idCliente);
                        if (existencia)
                        {
                            result.isOk = false;
                            result.message = "Já existe esse beneficiario Cadastrado com esse cliente!";
                            return Json(result);
                        }
                        else
                        {
                            beneficiario.Incluir(new Beneficiario()
                            {
                                Nome = model.Beneficiario.Nome,
                                Cpf = model.Beneficiario.Cpf,
                                IdCliente = idCliente,
                            });
                        }
                    }
                    result.isOk = true;
                    result.message = "Cadastro de cliente realizado com sucesso!";
                    return Json(result);

                }
            }
        }

        [HttpPost]
        public JsonResult Alterar(ClienteModel model)
        {
            BoCliente bo = new BoCliente();
       
            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                BoBeneficiario beneficiario = new BoBeneficiario();

                beneficiario.Consultar();
                bo.Alterar(new Cliente()
                {
                    Id = model.Id,
                    CEP = model.CEP,
                    Cidade = model.Cidade,
                    Email = model.Email,
                    Estado = model.Estado,
                    Logradouro = model.Logradouro,
                    Nacionalidade = model.Nacionalidade,
                    Nome = model.Nome,
                    Sobrenome = model.Sobrenome,
                    Telefone = model.Telefone,
                    Cpf = model.Cpf,
                });
                               
                return Json("Cadastro alterado com sucesso");
            }
        }

        [HttpGet]
        public ActionResult Alterar(long id)
        {
            BoCliente bo = new BoCliente();
            Cliente cliente = bo.Consultar(id);
            Models.ClienteAtualizarModel model = null;

            if (cliente != null)
            {
                model = new ClienteAtualizarModel()
                {
                    Id = cliente.Id,
                    CEP = cliente.CEP,
                    Cidade = cliente.Cidade,
                    Email = cliente.Email,
                    Estado = cliente.Estado,
                    Logradouro = cliente.Logradouro,
                    Nacionalidade = cliente.Nacionalidade,
                    Nome = cliente.Nome,
                    Sobrenome = cliente.Sobrenome,
                    Telefone = cliente.Telefone,
                    Cpf = cliente.Cpf,
                };
            }

            return View(model);
        }

        [HttpPost]
        public JsonResult ClienteList(int jtStartIndex = 0, int jtPageSize = 0, string jtSorting = null)
        {
            try
            {
                int qtd = 0;
                string campo = string.Empty;
                string crescente = string.Empty;
                string[] array = jtSorting.Split(' ');

                if (array.Length > 0)
                    campo = array[0];

                if (array.Length > 1)
                    crescente = array[1];

                List<Cliente> clientes = new BoCliente().Pesquisa(jtStartIndex, jtPageSize, campo, crescente.Equals("ASC", StringComparison.InvariantCultureIgnoreCase), out qtd);

                //Return result to jTable
                return Json(new { Result = "OK", Records = clientes, TotalRecordCount = qtd });
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
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