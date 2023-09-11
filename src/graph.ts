class Node {
  value: any;
  adjacent: Set<Node>;

  constructor(value: any, adjacent: Set<Node> = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  nodes: Set<Node>;

  constructor() {
    this.nodes = new Set();
  }
  // this function accepts a Node instance and adds it to the nodes property on the graph

  addVertex(vertex: Node): void {
    this.nodes.add(vertex);
  }

  //  this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray: Node[]) {
    for (let v of vertexArray) {
      this.nodes.add(v);
    }
  }
  //   // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1: Node, v2: Node) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }
  //   // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1: Node, v2: Node) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  //   // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex: Node) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }
  //   // this function returns an array of Node values using DFS
  depthFirstSearch(start: Node) {
    const res: any[] = [];
    const visited = new Set();

    const traverse = (vertex: Node) => {
      // base case
      if (!vertex) {
        return null;
      }
      visited.add(vertex);
      res.push(vertex.value);

      vertex.adjacent.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          return traverse(neighbor);
        }
      });
    };

    traverse(start);

    return res;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start: Node) {
    let queue: Node[] = [start];
    let output: any[] = [];
    const visitedNodes = new Set();
    visitedNodes.add(start);

    while (queue.length) {
      let node = queue.shift();
      if (node) {
        output.push(node.value);

        for (let adj of node.adjacent) {
          if (!visitedNodes.has(adj)) {
            queue.push(adj);
            visitedNodes.add(adj);
          }
        }
      }
    }

    return output;
  }
}

export { Graph, Node };

// ---------ORIGINAL SUBMISSION----------

// class Node {
//   constructor(value, adjacent = new Set()) {
//     this.value = value;
//     this.adjacent = adjacent;
//   }
// }

// class Graph {
//   constructor() {
//     this.nodes = new Set();
//   }

//   // this function accepts a Node instance and adds it to the nodes property on the graph
//   addVertex(vertex) {
//     this.nodes.add(vertex)
//   }

//   // this function accepts an array of Node instances and adds them to the nodes property on the graph
//   addVertices(vertexArray) {
//     for(let node of vertexArray){
//       this.addVertex(node)
//     }

//   }

//   // this function accepts two vertices and updates their adjacent values to include the other vertex
//   addEdge(v1, v2) {
//     v1.adjacent.add(v2);
//     v2.adjacent.add(v1);
//   }

//   // this function accepts two vertices and updates their adjacent values to remove the other vertex
//   removeEdge(v1, v2) {
//     v1.adjacent.delete(v2)
//     v2.adjacent.delete(v1)

//   }

//   // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
// removeVertex(vertex) {
//   for (let node of this.nodes) {
//     if (node.adjacent.has(vertex)) {
//       node.adjacent.delete(vertex);
//     }
//   }
//   this.nodes.delete(vertex);
// }

// depthFirstSearch(start) {
//   const visited = new Set();
//   const result = [];

//   function traverse(vertex) {
//     // base case
//     if (!vertex) {
//       return null;
//     }
//     // visit node
//     visited.add(vertex);
//     result.push(vertex.value);

//     // visit neighbors
//     vertex.adjacent.forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         return traverse(neighbor);
//       }
//     });
//   }

//   traverse(start);

//   return result;
// }

// breadthFirstSearch(start) {
//   // Create an empty queue
//   const queue = [start];
//   const result = [];
//   const visited = new Set();
//   let currentVertex;

//   // visit node
//   visited.add(start);

//   // While there is still remaining vertices in queue
//   while (queue.length) {
//     currentVertex = queue.shift();
//     result.push(currentVertex.value);

//     // visit neighbors
//     currentVertex.adjacent.forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     });
//   }
//   return result;
// }

// module.exports = {Graph, Node}
