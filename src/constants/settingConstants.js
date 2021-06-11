export const widthFloor = 700;
export const heightFloor = 700;

export const screen = document.createElement('div');
screen.setAttribute('id', 'screen');
screen.style.display = 'flex';
screen.style.justifyContent = 'center';
screen.style.alignItems = 'center';
screen.style.width = '100%';
screen.style.height = '95vh';

export const gameFloor = document.createElement('div');
gameFloor.setAttribute('id', 'gameFloor');
gameFloor.style.width = `${widthFloor}px`;
gameFloor.style.height = `${heightFloor}px`;
gameFloor.style.border = 'blue 1px solid';
gameFloor.style.position = 'relative';
gameFloor.style.backgroundColor = "black";

// Obstacles
export const wallsInfos = [
    {width: 650, height: 30, left: 15, top:20},
    {width: 650, height: 30, left: 15, top:650},
    {width: 30, height: 300, left: 15, top:20},
    {width: 30, height: 250, left: 15, top:430},
    {width: 30, height: 300, left: 650, top:20},
    {width: 30, height: 250, left: 650, top:430},
    {width: 70, height: 180, left: 130, top: 260},
    {width: 70, height: 180, left: 480, top: 260},
    {width: 100, height: 70, left: 120, top: 520},
    {width: 100, height: 70, left: 460, top: 520},
    {width: 100, height: 20, left: 290, top: 570},
    {width: 100, height: 70, left: 120, top: 110},
    {width: 100, height: 70, left: 460, top: 110},
    {width: 100, height: 20, left: 290, top: 110},
    {width: 10, height: 178, left: 270, top: 260},
    {width: 10, height: 178, left: 400, top: 260},
  ];