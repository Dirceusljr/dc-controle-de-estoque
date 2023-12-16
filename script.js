const tabela = document.getElementById('tabela')

let listaDeBebidas = [
    {
      "ID": 1,
      "nome": "Cerveja IPA",
      "descricao": "Uma cerveja encorpada e amarga, com notas cítricas e frutadas.",
      "preco": 9.99
    },
    {
      "ID": 2,
      "nome": "Vinho Tinto Merlot",
      "descricao": "Um vinho encorpado com notas de frutas escuras e taninos suaves.",
      "preco": 15.50
    },
    {
      "ID": 3,
      "nome": "Coquetel Mojito",
      "descricao": "Uma mistura refrescante de rum, hortelã, limão, açúcar e água com gás.",
      "preco": 8.75
    },
    {
      "ID": 4,
      "nome": "Whisky Single Malt",
      "descricao": "Um whisky envelhecido com sabores complexos e final defumado.",
      "preco": 39.99
    },
    {
      "ID": 5,
      "nome": "Chá Verde",
      "descricao": "Um chá leve e revigorante, repleto de antioxidantes.",
      "preco": 4.50
    },
    {
      "ID": 6,
      "nome": "Café Espresso",
      "descricao": "Um café encorpado e intenso, com um toque de amargor.",
      "preco": 2.99
    },
    {
      "ID": 7,
      "nome": "Sidra Artesanal",
      "descricao": "Uma bebida efervescente feita com maçãs frescas e fermentação natural.",
      "preco": 12.25
    },
    {
      "ID": 8,
      "nome": "Gin Tônica",
      "descricao": "Gin aromático combinado com água tônica e um toque de limão.",
      "preco": 10.00
    },
    {
      "ID": 9,
      "nome": "Vodka Premium",
      "descricao": "Vodka destilada várias vezes, suave e ideal para coquetéis.",
      "preco": 20.75
    },
    {
      "ID": 10,
      "nome": "Suco de Laranja Natural",
      "descricao": "Suco fresco e natural de laranjas maduras e suculentas.",
      "preco": 5.25
    }
  ]
  
  

  function criarTabela(item, tabela) {

    let criarBaseTabela = document.createElement('table')
    criarBaseTabela.classList = 'table table-success table-striped'
    criarBaseTabela.innerHTML = `
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço (R$)</th>
            <th>Editar</th>
            <th>Excluir</th>
        </tr>
         `
    tabela.appendChild(criarBaseTabela)

    for (let i = 0; i < item.length; i++) {
        let itemDaLista = document.createElement('tr')      
        criarBaseTabela.appendChild(itemDaLista)
        itemDaLista.innerHTML += `
        <td>${item[i].ID}</td>
        <td>${item[i].nome}</td>
        <td>${item[i].descricao}</td>
        <td>${item[i].preco}</td>
        <td>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
      </svg></button>
        </td>
        <td>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg></button>
        </td>
        `    
    }
}

window.addEventListener('load', criarTabela(listaDeBebidas, tabela))