import {Graph, Vertex} from "./graph.js"

let scissorsVertex = new Vertex("scissors")
let paperVertex = new Vertex("paper")
let rockVertex = new Vertex("rock")

let winTable = new Graph()
winTable.createEdge(scissorsVertex, paperVertex)
winTable.createEdge(paperVertex, rockVertex)
winTable.createEdge(rockVertex, scissorsVertex)

const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissors = document.getElementById("btn-scissors")
const btnAgain = document.getElementById("btn-again")

btnRock.addEventListener("click", () => onPlayerSelect(rockVertex))
btnPaper.addEventListener("click", () => onPlayerSelect(paperVertex))
btnScissors.addEventListener("click", () => onPlayerSelect(scissorsVertex))
btnAgain.addEventListener("click", resetGame)

function resetGame() {
    let menu = document.getElementById("menu")
    menu.style.visibility = "visible"

    let resultMenu = document.getElementById("resultMenu")
    resultMenu.style.visibility = "hidden"

    document.getElementById("cpuImg").remove();
    document.getElementById("playerImg").remove();
}

function generateSelection() {
    const randomIndex = Math.floor(Math.random() * winTable.verticies.length)
    return winTable.verticies[randomIndex]
}

function onPlayerSelect(playerChoice) {
    const playerImg = document.getElementById("playerImg")
    const cpuChoice = generateSelection()

    if (playerImg != null) {
        playerImg.remove()
    }

    let newPlayerImg = document.createElement("img")
    newPlayerImg.src = "assets/"+ playerChoice.data + ".png"
    newPlayerImg.id = "playerImg"
    document.body.appendChild(newPlayerImg)

    let newCpuImg = document.createElement("img")
    newCpuImg.src = "assets/"+ cpuChoice.data + ".png"
    newCpuImg.id = "cpuImg"
    document.body.appendChild(newCpuImg)

    let menu = document.getElementById("menu")
    menu.style.visibility = "hidden"

    let resultMenu = document.getElementById("resultMenu")
    resultMenu.style.visibility = "visible"

    let result = document.getElementById("result")

    if (playerChoice === cpuChoice) {
        result.innerText = "Draw :|"
    }

    else if (winTable.hasEdge(playerChoice, cpuChoice)) {
        result.innerText = "Winner :)"
    }

    else {
        result.innerText = "Looooooser :("
    }
}