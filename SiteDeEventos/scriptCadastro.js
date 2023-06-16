function cadastro() {
    var nomeCadastro, senhaCadastro, confimarSenhaCadastro, emailCadastro;

    nomeCadastro = document.getElementById("CNome").value;
    senhaCadastro = document.getElementById("CSenha").value;
    confimarSenhaCadastro = document.getElementById("CconfirmarSenha").value;
    emailCadastro = document.getElementById("CEmail").value;



    if (nomeCadastro === "" || senhaCadastro === "" || confimarSenhaCadastro === "" || emailCadastro === "") {
        alert("Para cadastrar o seu evento todos os campos devem ser preenchidos.");
        return;
    }

    if (senhaCadastro != confimarSenhaCadastro) {

        alert(" As senhas não se coincidem! Tente novamente");
        return;
    }

    alert("Nome do usuário: " + nomeCadastro
        + "\nEmail: " + emailCadastro
        + "\nSenha: " + senhaCadastro
    );

    document.getElementById("CNome").value = "";
    document.getElementById("CSenha").value = "";
    document.getElementById("CconfirmarSenha").value = "";
    document.getElementById("CEmail").value = "";


    alert("Cadastro feito com sucesso!!!");
}