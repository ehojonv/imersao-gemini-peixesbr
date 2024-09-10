function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção HTML onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById("campoPesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada encontrado. Busca inválida</p>"
        return;
    }

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados formatados.
    let titulo = "";
    let descricao = "";

    for (let dado of dados) { // Itera sobre cada objeto (peixe) no array 'dados'.
        titulo = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
        } else {
            resultados = "<p>Nada encontrado</p>"
        }

    };

    section.innerHTML = resultados; // Atribui o conteúdo da string 'resultados' à seção HTML, substituindo o conteúdo anterior.
}

