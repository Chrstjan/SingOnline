import { clearApp } from "../initPage.js";
const appContainer = document.getElementById("app");

export const randSongs = () => {
  clearApp();
  let randSongsContainer = `
    <div class="left-side">
        <span class="welcome-text">
            <header>
                <h2>Welcome</h2>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eius eos, aliquam est rerum vitae soluta deleniti
                voluptatum ea non iure iusto quasi accusantium ratione
                recusandae necessitatibus culpa assumenda
                adipisci commodi?.aliquam est rerum vitae soluta deleniti
                voluptatum ea non iure iusto quasi accusantium ratione
                recusandae necessitatibus culpa assumenda
                adipisci
            </p>
        </span>
        <span class="rand-songs">
            <header>
                <h2>10 helt tilfældige...</h2>
            </header>
        </span>
    </div>`;

  appContainer.innerHTML += randSongsContainer;
};
