<template>
    <div class="catalogo-filmes">
        <h2>Catálogo de Livros</h2>
        <button router-link to="/">Mudar catálogo</button>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo livro" />
        <ul>
            <li v-for="(livro, index) in livros" :key="index">
                {{ livro.titulo }}
                <button @click="alternarStatus(livro)">Marcar como {{
                    livro.lido ? 'Não Lido' : 'Lido' }}</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoLivro: "",
            livros: [],
        };
    },
    methods: {
        adicionarLivro() {
            if (this.novoLivro.trim() !== "") {
                this.livros.push({ titulo: this.novoLivro, assistido: false });
                this.novoLivro = "";
            }
        },
        alternarStatus(livro) {
            livro.lido = !livro.lido;
        },
    },
};
</script>
    
<style scoped>
.catalogo-filmes {
    margin: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}
</style>