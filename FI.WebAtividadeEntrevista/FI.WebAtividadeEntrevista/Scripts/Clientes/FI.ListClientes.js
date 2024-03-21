var listaBeneficiarios = []
var beneficiarioSalvar = {
    Nome: "",
    Cpf: "",
};
function ModalDialogBeneficiario(titulo) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="modalBeneficiario" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                     <div class="row">' +
        '                       <div class="col-md-4">' +
        '                           <div class="form-group">' +
        '                               <label for="CpfBeneficiario">CPF:</label>' +
        '                               <input required="required" type="text" class="form-control" id="CpfBeneficiario" name="CpfBeneficiario" placeholder="Ex.: 040.093.093-09" maxlength="20">' +
        '                           </div>' +
        '                       </div> ' +
        '                       <div class="col-md-6">' +
        '                           <div class="form-group">' +
        '                               <label for="NomeBneficiario">Nome:</label>' +
        '                               <input required="required" type="text" class="form-control" id="NomeBneficiario" name="NomeBneficiario" placeholder="Ex.: Jose" maxlength="50">' +
        '                           </div>' +
        '                       </div> ' +
        '                       <div class="col-md-2">' +
        '                           <button type="button" class="btn btn-sm btn-success" id="adicionarBeneficiario" style="margin-top: 25px;">INCLUIR</button>' +
        '                       </div>' +

        '                     </div>' +
        '                     <table class="table" id="tabelaBeneficiarios">' +
        '                           <thead>' +
        '                                <tr>' +
        '                                <th>CPF</th>' +
        '                                <th>Nome</th>' +
        '                                <th>Ações</th>' +
        '                                </tr>' +
        '                           </thead>' +
        '                        <tbody>' +
        '                        </tbody>' +
        '                     </table>' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#modalBeneficiario').modal('show');
    $('#CpfBeneficiario').mask('999.999.999-99');
}
function ModalDialogBeneficiarioAlterar(titulo) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="modalBeneficiario" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                     <div class="row">' +
        '                       <div class="col-md-4">' +
        '                           <div class="form-group">' +
        '                               <label for="CpfBeneficiario">CPF:</label>' +
        '                               <input required="required" type="text" class="form-control" id="CpfBeneficiarioAlterar" name="CpfBeneficiario" placeholder="Ex.: 040.093.093-09" maxlength="20">' +
        '                           </div>' +
        '                       </div> ' +
        '                       <div class="col-md-6">' +
        '                           <div class="form-group">' +
        '                               <label for="NomeBneficiario">Nome:</label>' +
        '                               <input required="required" type="text" class="form-control" id="NomeBneficiarioAlterar" name="NomeBneficiario" placeholder="Ex.: Jose" maxlength="50">' +
        '                           </div>' +
        '                       </div> ' +
        '                       <div class="col-md-2">' +
        '                           <button type="button" class="btn btn-sm btn-success" id="alterarBeneficiario" style="margin-top: 25px;">Alterar</button>' +
        '                       </div>' +

        '                     </div>' +
        '                     <table class="table" id="tabelaBeneficiarios">' +
        '                           <thead>' +
        '                                <tr>' +
        '                                <th>CPF</th>' +
        '                                <th>Nome</th>' +
        '                                <th>Ações</th>' +
        '                                </tr>' +
        '                           </thead>' +
        '                        <tbody>' +
        '                        </tbody>' +
        '                     </table>' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#modalBeneficiario').modal('show');
    $('#CpfBeneficiario').mask('999.999.999-99');
}
function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
function validaValorRepetido(cpf) {
    const numerosRep = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'

    ]
    return numerosRep.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0
    let multiplicador = 10
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        console.log(soma)
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    console.log(soma);
    return soma != cpf[9];
}
function validaSegundoDigito(cpf) {
    let soma = 0
    let multiplicador = 11
    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        console.log(soma)
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    console.log(soma);
    return soma != cpf[10];
}
function atualizarTabela() {
    var tabela = $('#tabelaBeneficiarios tbody');
    tabela.empty();
    listaBeneficiarios.forEach(function (beneficiario, index) {
        var linha = '<tr><td>' + beneficiario.cpf + '</td><td>' + beneficiario.nome + '</td>' +
            '<td><button type="button" class="btn btn-primary btn-sm btn-alterar" style="margin-right: 5px" data-index="' + index + '">Alterar</button>' +
            '<button type="button" class="btn btn-primary btn-sm btn-excluir" data-index="' + index + '">Excluir</button></td>' +
            '</tr>';
        tabela.append(linha);
    });
}
function adicionarBeneficiario(cpf, nome) {
    cpf = cpf.replace(/\.|-/g, "");
    var cpfExiste = listaBeneficiarios.find(function (beneficiario) {
        return beneficiario.cpf === cpf;
    });
    if (cpf && nome) {
        if (!cpfExiste) {
            if (validaValorRepetido(cpf)) {
                ModalDialog("CPF Não permitido", "Valor de CPF Inválido!")
            } else {
                if (validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
                    ModalDialog("CPF Não permitido", "Valor de CPF Inválido!")
                } else {

                    beneficiarioSalvar.Cpf = cpf;
                    beneficiarioSalvar.Nome = nome
                        
                    
                    ModalDialog("Sucesso", "Beneficiario adicionado!")
                    $('#CpfBeneficiario').val("")
                    $('#NomeBneficiario').val("");
                }
            }

        } else {
            ModalDialog("CPF existente", "CPF já foi inserido!")
        }
    } else {
        ModalDialog("Campo(s) Vazio(s)", "CPF ou Nome não foi preenchido!")
    }

}
function salvarListaBeneficiarios() {
    localStorage.setItem('listaBeneficiarios', JSON.stringify(listaBeneficiarios));
}
function carregarListaBeneficiarios() {
    var listaSalva = localStorage.getItem('listaBeneficiarios');
    if (listaSalva) {
        listaBeneficiarios = JSON.parse(listaSalva);
    }
}
$(document).ready(function () {
    // Se o elemento com ID "gridClientes" existir, inicialize o jTable
    if (document.getElementById("gridClientes")) {
        $('#gridClientes').jtable({
            title: 'Clientes',
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlClienteList,
            },
            fields: {
                Nome: {
                    title: 'Nome',
                    width: '50%'
                },
                Email: {
                    title: 'Email',
                    width: '35%'
                },
                Alterar: {
                    title: '',
                    display: function (data) {
                        return '<button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                    }
                }
            }
        });

        // Carregue a lista de clientes do servidor
        $('#gridClientes').jtable('load');
    }

    // Adiciona a requisição AJAX quando o botão "Novo Cliente" for clicado
    $('#novo').click(function (e) {
        e.preventDefault(); // Isso evita o comportamento padrão do link

        $.ajax({
            url: urlget, // Substitua urlget pela URL desejada
            method: "POST",
            data: {
                // Aqui você pode adicionar os dados que deseja enviar para o servidor
            },
            error: function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success: function (result) {
                if (result.isOk) {
                    result.bag.forEach(function (b) {
                        var beneficiario = {
                            nome: b.Nome,
                            cpf: b.Cpf,
                            IdCliente: b.IdCliente
                        };
                        listaBeneficiarios.push(beneficiario);
                    });
                    salvarListaBeneficiarios();
                    window.location.href = 'Cliente/Incluir';
                } else {
                    ModalDialog("Atenção", result.message);
                }
            }
        });
    });
    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        var cpf = $(this).find("#Cpf").val().replace(/\.|-/g, "");
        if (validaValorRepetido(cpf)) {
            ModalDialog("CPF Não permitido", "Valor de CPF Inválido!")
        } else {
            if (validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
                ModalDialog("CPF Não permitido", "Valor de CPF Inválido!")
            } else {

                $.ajax({
                    url: urlPost,
                    method: "POST",
                    data: {
                        "NOME": $(this).find("#Nome").val(),
                        "CEP": $(this).find("#CEP").val(),
                        "Email": $(this).find("#Email").val(),
                        "Sobrenome": $(this).find("#Sobrenome").val(),
                        "Nacionalidade": $(this).find("#Nacionalidade").val(),
                        "Estado": $(this).find("#Estado").val(),
                        "Cidade": $(this).find("#Cidade").val(),
                        "Logradouro": $(this).find("#Logradouro").val(),
                        "Telefone": $(this).find("#Telefone").val(),
                        "Cpf": cpf,
                        "Beneficiario": beneficiarioSalvar

                    },
                    error:
                        function (r) {
                            if (r.status == 400)
                                ModalDialog("Ocorreu um erro", r.responseJSON);
                            else if (r.status == 500)
                                ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                        },
                    success:
                        function (result) {
                            if (result.isOk) {
                                ModalDialog("Sucesso!", result.message)
                                $("#formCadastro")[0].reset();
                                listaBeneficiarios = [];
                                atualizarTabela();
                                window.location.href = '/Cliente';

                            } else {
                                ModalDialog("Atenção", result.message)
                            }

                        }
                });
            }
        }

    })
    $('#beneficiario').on("click", function () {
        carregarListaBeneficiarios()
        ModalDialogBeneficiario("BENEFICIARIOS")
        atualizarTabela();
    });
    $(document).on('click', '#adicionarBeneficiario', function () {
        var cpf = $('#CpfBeneficiario').val();
        var nome = $('#NomeBneficiario').val();
        adicionarBeneficiario(cpf, nome)
    });
    $(document).on('click', '.btn-excluir', function () {
        var index = $(this).data('index');
        var beneficiario = listaBeneficiarios[index];
        $.ajax({
            url: urlExcluir,
            method: "POST",
            data: {
                "Cpf": beneficiario.cpf,
            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (result) {
                    if (result.isOk) {
                        ModalDialog("Sucesso!", result.message)
                        
                        atualizarTabela();

                    } else {
                        ModalDialog("Atenção", result.message)
                    }

                }
        });

        listaBeneficiarios.splice(index, 1);
        atualizarTabela();
    });
    $(document).on('click', '.btn-alterar', function () {
        var index = $(this).data('index');
        var beneficiario = listaBeneficiarios[index];
        $('#CpfBeneficiarioAlterar').val(beneficiario.cpf);
        $('#NomeBneficiarioAlterar').val(beneficiario.nome);
        atualizarTabela();
    });
});