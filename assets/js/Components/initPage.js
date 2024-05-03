//Will be sued for calling functions that should run on page load
import { randSongs } from "./songs/randomSongs.js";

export const initPageLoad = () => {
  randSongs();
};

//Used for clearing the app container
export const clearApp = () => {
  const appContainer = document.getElementById("app");

  appContainer.innerHTML = "";
};
