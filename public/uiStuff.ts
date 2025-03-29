const width = window.innerWidth;
const height = window.innerHeight;

const canvas = <HTMLCanvasElement>document.querySelector("#the-canvas");
const context = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;
