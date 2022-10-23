export class Vertex {
    constructor(data) {
        this.data = data
        this.edges = []
    }

    addEdge(vertex) {
        this.edges.push(vertex)
    }

    spans(vertex) {
        return this.edges.includes(vertex)
    }
}

export class Graph {
    constructor() {
        this.verticies = []
    }

    addVertex(vertex) {
        this.verticies.push(vertex)
    }

    createEdge(vertex1, vertex2) {
        vertex1.addEdge(vertex2)
        if (!this.verticies.includes(vertex1)) {
            this.addVertex(vertex1)
        }
        
        if (!this.verticies.includes(vertex2)) {
            this.addVertex(vertex2)
        }
    }

    hasEdge(vertex1, vertex2) {
        return vertex1.spans(vertex2)
    }
}
