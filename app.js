const result = document.getElementById("result");
const colorVisualisation = document.getElementById("color");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const copyBtn = document.getElementById("copy");

function SetColor()
{
    let color = "rgb("+ red.value + "," + green.value + "," + blue.value + ")";

    colorVisualisation.style.backgroundColor = color;
    result.value = color;

    SaveData();
}

function Copy()
{
    result.select();
    document.execCommand("copy");

    SaveData();
}

function SaveData()
{
    localStorage.setItem("red", red.value);
    localStorage.setItem("green", green.value);
    localStorage.setItem("blue", blue.value);
}

function LoadData()
{
    red.value = localStorage.getItem("red");
    green.value = localStorage.getItem("green");
    blue.value = localStorage.getItem("blue");

    SetColor();
}

window.addEventListener("load", LoadData);

red.addEventListener("input", SetColor);
green.addEventListener("input", SetColor);
blue.addEventListener("input", SetColor);

copyBtn.addEventListener("click", Copy);