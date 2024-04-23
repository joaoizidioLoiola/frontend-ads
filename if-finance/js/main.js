
function addCard() {
  const listaCards = document.querySelector('body > main ')

  listaCards.innerHTML = listaCards.innerHTML + `
  <div class="card-ticket">
        <header>
          <h2><span>NASDAQ:</span> AAPL</h2>
          <h1>Apple Inc</h1>
        </header>

        <main>
          <div>
            <h2 class="value">Valor:</h2>
            <span>180.95 BRL</span>
          </div>

          <div class="teste">
            <p class="value">Variação:</p>
            <span class="pos">▲ +0.25%</span>
            <span>USD$ 0,98</span>
          </div>
        </main>

        <footer>
          <div>
            <p>20</p>
            <span>Ações</span>
          </div>
          <div>
            <p>USD$ 5.170,05</p>
            <span>Posição</span>
          </div>
        </footer>
      </div>`
}