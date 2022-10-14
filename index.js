import {Graph, Vertex} from "./graph.js"

let scissorsVertex = new Vertex("scissors")
let paperVertex = new Vertex("paper")
let rockVertex = new Vertex("rock")

let winTable = new Graph()
winTable.createEdge(scissorsVertex, paperVertex)
winTable.createEdge(paperVertex, rockVertex)
winTable.createEdge(rockVertex, scissorsVertex)

console.log("Taş, makası yener mi?" + winTable.hasEdge(rockVertex, scissorsVertex))