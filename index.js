import {Graph, Vertex} from "./graph.js"

let scissorsVertex = new Vertex("scissors")
let paperVertex = new Vertex("paper")
let rockVertex = new Vertex("rock")

let winTable = new Graph()
winTable.createEdge(scissorsVertex, paperVertex)
winTable.createEdge(paperVertex, rockVertex)
winTable.createEdge(rockVertex, scissorsVertex)

console.log("Taş, makası yener mi?" + winTable.hasEdge(rockVertex, scissorsVertex))

const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissors = document.getElementById("btn-scissors")

btnRock.addEventListener("click", () => onPlayerSelect(rockVertex))
btnPaper.addEventListener("click", () => onPlayerSelect(paperVertex))
btnScissors.addEventListener("click", () => onPlayerSelect(scissorsVertex))

function onPlayerSelect(choice) {
    console.log(choice)
    const selectedImg= document.getElementById("selectedImg")

    if (selectedImg != null) {
        selectedImg.remove()
    }

    let newImg = document.createElement("img")
    newImg.src = "assets/"+ choice.data + ".png"
    newImg.id = "selectedImg"
    document.body.appendChild(newImg)

    let menu = document.getElementById("menu")
    menu.style.display = "none"

    let resultMenu = document.getElementById("resultMenu")
    resultMenu.style.display = "flex"
}
