function cadastroEvento() {
    var nomeEvento, dataEvento, nParticipantes, nomePalestrante

    nomeEvento = document.getElementById("eNome").value;
    dataEvento = document.getElementById("eData").value;
    nParticipantes = document.getElementById("eNumero").value;
    nomePalestrante = document.getElementById("eNomeP").value;

    if (nomeEvento != "" && nomePalestrante != "" && dataEvento !=  && nParticipantes > 0) {

        alert(nomeEvento+" "+nomePalestrante+" "+dataEvento+" "+nParticipantes)
    }

}