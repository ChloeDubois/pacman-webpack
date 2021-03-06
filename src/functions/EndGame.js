import {widthFloor, heightFloor, gameFloor} from '../constants/settingConstants.js'

export function EndGame(victory) {
    const card = document.createElement('div');
    card.style.width = "300px";
    card.style.height = "300px";
    card.style.border = "solid 3px #3F51B5";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.backgroundColor = "black";
    card.style.zIndex= 999;
    card.style.position = "absolute";
    card.style.left = `${widthFloor/2 - 150}px`;
    card.style.top = `${heightFloor/2 - 150}px`;
    const text = document.createElement('div');
    text.style.color = "red";
    text.style.fontWeight = "bold";
    text.style.fontSize = "40px";
    card.appendChild(text);
    gameFloor.appendChild(card);

    if (victory ? text.innerHTML = "You won!!" : text.innerHTML = "Game Over");
  }