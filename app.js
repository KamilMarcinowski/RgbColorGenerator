const result = document.getElementById("result");
const colorVisualisation = document.getElementById("color");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

function SetColor()
{
    let color = "rgb("+ red.value + "," + green.value + "," + blue.value + ")";

    colorVisualisation.style.backgroundColor = color;
    result.value = color;
}

red.addEventListener("input", SetColor);
green.addEventListener("input", SetColor);
blue.addEventListener("input", SetColor);