function login() {
    var nomeLogin, senhaLogin;

    nomeLogin = document.getElementById("LEmail").value;
    senhaLogin = document.getElementById("LSenha").value;



    if (nomeLogin === "" || senhaLogin === "" ) {
        alert("Para cadastrar o seu evento todos os campos devem ser preenchidos.");
        return;
    }

    alert("Email: "+nomeLogin
    +"\nSenha: "+senhaLogin);

    document.getElementById("LEmail").value = "";
    document.getElementById("LSenha").value = "";


    alert("Login feito com sucesso!!!");
}