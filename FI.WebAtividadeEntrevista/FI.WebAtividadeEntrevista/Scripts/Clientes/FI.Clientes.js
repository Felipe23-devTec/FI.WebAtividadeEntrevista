
$(document).ready(function () {
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
                            } else {
                                ModalDialog("Atenção", result.message)
                            }
                            
                        }
                });
            }
        }
        
    })

    $('#beneficiario').on("click", function (e) {
        e.preventDefault();
        ModalDialogBeneficiario("BENEFICIARIOS")
    })
    
})

function ModalDialogBeneficiario(titulo) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                      <div>' +
        '                          <label for="Cpf">CPF:</label>' +
        '                          <input required="required" type="text" class="form-control" id="Cpf" name="Cpf" placeholder="Ex.: 040.093.093-09" maxlength="20">' +
        '                     </div> ' +
        '                     <div>' +
        '                          <label for="Nome">Nome:</label>' +
        '                          <input required="required" type="text" class="form-control" id="Nome" name="Nome" placeholder="Ex.: Jose" maxlength="50">' +
        '                     </div> ' +
        '                     <button type="button" class="btn btn-sm btn-success" id="beneficiario" style="margin-top: 25px;">INCLUIR</button>' +
        '                     <table class="table">' +
        '                           <thead>' +
        '                                <tr>' +
        '                                <th>CPF</th>' +
        '                                <th>Nome</th>' +
        '                                </tr>'+
        '                           </thead>' +
        '                        <tbody>' +
        '                            <tr>' +
        '                                <td>Dados da tabela</td> ' +
        '                                <td>Dados da tabela</td> ' +
        '                            </tr>' +
        '                        </tbody>' +
        '                     </table>'+
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
