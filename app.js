function pesquisar() {
    // Resultado de html
    let section = document.getElementById("resultados-pesquisa");
let buscaPersonalizada = document.getElementById ("busca-personalizada").value
if (!buscaPersonalizada) {
    section.innerHTML = "<p>Sem Resultados</p>"
    return 
}    
buscaPersonalizada = buscaPersonalizada.toLowerCase()

// String Vazia 
    let resultados = "";
    let nome = ""; 
    let descricao = "";
    let Referências = "";
    // Dados
    for (let dado of dados) {
        nome = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase(
        )
        Referências = dado.Referências.toLowerCase()
        if (nome.includes(buscaPersonalizada) || descricao.includes(buscaPersonalizada)
       
        || tags.includes(buscaPersonalizada)) {
        
        
        // Criacao de Resultados
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.Link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

         if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

   //atributo do Html
    section.innerHTML = resultados;
}