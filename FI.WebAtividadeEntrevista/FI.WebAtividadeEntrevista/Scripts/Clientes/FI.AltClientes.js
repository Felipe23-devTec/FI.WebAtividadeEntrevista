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
$(document).ready(function () {
    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
        $('#formCadastro #Cpf').val(obj.Cpf);
    }

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
                        function (r) {
                            ModalDialog("Sucesso!", r)
                            $("#formCadastro")[0].reset();
                            window.location.href = urlRetorno;
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


