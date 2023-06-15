
function previewImg() {
    let preview = document.querySelector('img');
    let file = document.querySelector('#fotoDoEvento').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {

    }
}

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
    let card = `
    <div class="card" style="width: 28rem; justify-content: center; margin:20px; display:block;" id="cardEvento1" data-bs-theme="dark">
    <img src="${preview.src}" width="20rem" height="320px" style="object-fit:cover;""
        class="card-img-top" alt="Foto do evento">
            <div class="card-body" style="justify-content: center;">
                <h2 class="card-title" id="nomeEventoDigitado" style="text-transform: uppercase;">${nomeEvento}</h2>
                <hr>
                <h5 class="card-title">Local: </h5>
                <p class="card-title" id="nomePalestranteDigitado" style="font-weight: 900;">${localEvento}</p>
                <hr>
                <h5 class="card-text">Descrição:</h5>
                <p class="card-text" id="numeroParticipantesDigitado" style="font-weight: 900;">${descricaoEvento}</p>
                <hr>
                <p class="card-text" id="dataEventoDigitado">${dataEvento.toLocaleDateString('pt-BR')}</p>
                <a href="#" class="btn btn-primary" style="display:flex; justify-content: center;">Mais informações</a>
            </div>
    </div>`;
    document.getElementById("eventoCadastrado").innerHTML += card;
    preview.src="";
    cEvento.reset();
}
