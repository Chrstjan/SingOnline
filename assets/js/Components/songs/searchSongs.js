import { clearApp } from "../initPage.js";

const appContainer = document.getElementById("app");

export const searchSongs = () => {
  clearApp();

  let serchbarContainer = `
    <div class="search-container">
        <header>
            <h2>Songs</h2>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eius eos, aliquam est rerum vitae soluta
            </p>
        </header>
        <span class="searchbar">
            <h3>Search</h3>
            <input type="text" placeholder="Type keyword..." />
        </span>
    </div>`;

  appContainer.innerHTML += serchbarContainer;
};
