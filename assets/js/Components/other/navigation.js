import { randSongs } from "../songs/randomSongs.js";
import { searchSongs } from "../songs/searchSongs.js";

const homeBtn = document.getElementById("home");
const headerHomeBtn = document.getElementById("home-header");
const songsBtn = document.getElementById("songs");
const artistsBtn = document.getElementById("artists");
const loginBtn = document.getElementById("login");

export const pageNavigation = () => {
  homeBtn.addEventListener("click", () => {
    randSongs();
  });

  headerHomeBtn.addEventListener("click", () => {
    randSongs();
  });

  songsBtn.addEventListener("click", () => {
    searchSongs();
  });
};
