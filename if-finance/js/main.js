
const allStock = [
  {
    bolsa: 'NASDAQ',
    codigo: 'AAPL',
    empresa: 'Apple Inc',
    valor: 18050,
    variacao: 0.25,
    nAcoes: 20,
    setor: 'Electronic Technology',
    site: 'https://www.apple.com'
  },
  {
    bolsa: 'NASDAQ',
    codigo: 'MSFT',
    empresa: 'Microsoft Corp',
    valor: 21100,
    variacao: 2.15,
    nAcoes: 15,
    setor: 'Technology Services',
    site: 'https://www.microsoft.com'
  },
  {
    bolsa: 'NASDAQ',
    codigo: 'NVDA',
    empresa: 'NVIDIA Corp',
    valor: 18500,
    variacao: -1.25,
    nAcoes: 10,
    setor: 'Electronic Technology',
    site: 'https://www.nvidia.com'
  }
]

function addCard(stock) {
  const listaCards = document.querySelector('body > main ')

  listaCards.innerHTML += `
  <div class="card-ticket">
        <header>
          <h2><span>${stock.bolsa}:</span>${stock.codigo}</h2>
          <h1>${stock.empresa}</h1>
        </header>

        <main>
          <div>
            <h2 class="value">Valor:</h2>
            <span>${realFormat(parseInt(stock.valor / 100))}</span>
          </div>

          <div class="teste">
            <p class="value">Variação:</p>
            <span ${stock.variacao < 0 ? 'class="neg"' : 'class="pos"'}}> ${stock.variacao < 0 ? '▼' : '▲'}  ${stock.variacao} %</span>
            <span>USD$ ${realFormat((+stock.valor / 100) * (+stock.variacao / 100))}</span>
          </div>
        </main>

        <footer>
          <div>
            <p>${stock.nAcoes}</p>
            <span>Ações</span>
          </div>
          <div>
            <p>USD$  ${realFormat((+stock.nAcoes) * (+stock.valor / 100))}</p>
            <span>Posição</span>
          </div>
        </footer>
      </div>`
}

function realFormat(valor) {
  return valor.toFixed(2).toString().replace('.', ',')
}

function loadCard() {
  allStock.map((stock) => {
    addCard(stock)
  })
}

function addTable(stock) {
  const main = document.querySelector('#tb2')

  main.innerHTML += `

  <tr>
        <td>${stock.bolsa}</td>
        <td>${stock.codigo}</td>
        <td>${stock.empresa}</td>
        <td>${realFormat(parseInt(stock.valor / 100))}</td>      
        <td>USD$ ${realFormat((+stock.valor / 100) * (+stock.variacao / 100))}</td>
        <td>${stock.nAcoes}</td>
        <td>USD$ ${realFormat((+stock.nAcoes) * (+stock.valor / 100))}</td>
  </tr>
 `
}

function loadTable() {
  allStock.map((stock) => {
    addTable(stock)
  })
}
const openModal = () => {
  const modal = document.getElementById('add-card-modal')
  modal.style.display = 'flex';
}

const closeModal = (event, id) => {
  const modal = document.getElementById('add-card-modal')

  if (event?.target?.id === 'add-card-modal' || id === 'add-card-modal') {
    modal.style.display = 'none';
  }
}

const createCard = (event) => {
  event.preventDefault();

  // const { bolsa, codigo, empresa, valor, variacao, nAcoes } = event.target.elements;

  // addCard({
  //   bolsa: bolsa.value,
  //   codigo: codigo.value,
  //   empresa: empresa.value,
  //   valor: valor.value,
  //   variacao: variacao.value,
  //   nAcoes: nAcoes.value
  // })

  const formData = new FormData(event.target);
  const stock = Object.fromEntries(formData);

  addCard(stock);

  closeModal(null, 'add-card-modal');
  event.target.reset();
}