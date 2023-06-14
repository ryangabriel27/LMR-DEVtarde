function cadastroEvento() {
    var nomeEvento, dataEvento, descricaoEvento, localEvento;

    nomeEvento = document.getElementById("eNome").value;
    dataEvento = document.getElementById("eData").value;
    descricaoEvento = document.getElementById("eDescricao").value;
    localEvento = document.getElementById("eLocal").value;



    if (nomeEvento === "" || dataEvento === "" || descricaoEvento === "" || localEvento === "") {
        alert("Para cadastrar o seu evento todos os campos devem ser preenchidos.");
        return;
    }
    var dataAtual = new Date().toISOString().split('T')[0]; // Obter a data atual
    if (dataEvento < dataAtual) {
        alert("A data do evento deve ser a partir do dia de hoje.");
        return;
    }
    
    alert("Nome do evento: "+nomeEvento
    +"\nData do evento: "+dataEvento
    +"\nDescrição do evento: "+descricaoEvento
    +"\nLocal do evento: "+localEvento);
    document.getElementById("eNome").value = "";
    document.getElementById("eData").value = "";
    document.getElementById("eDescricao").value = "";
    document.getElementById("eLocal").value = "";

    alert("Evento cadastrado com sucesso!");

}