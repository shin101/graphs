class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let node of vertexArray){
      this.addVertex(node)
    }

  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)

  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start];
    let output = [];
    const visitedNodes = new Set(); 
    visitedNodes.add(start)

    while (stack.length){
      let node = stack.pop(); 
      output.push(node.value);

      if (node.value){
        for (let adjacency of node.adjacent){
          if (!visitedNodes.has(adjacency)) {
            stack.push(adjacency)
            visitedNodes.add(adjacency)
        }}
      }
    }
    return output; 
  }
    

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) { 
    let queue = [start];
    let output = [];
    const visitedNodes = new Set(); 
    visitedNodes.add(start)

    while (queue.length){
      let node = queue.shift(); 
      output.push(node.value);

      if (node.value){
        for (let adjacency of node.adjacent){
          if (!visitedNodes.has(adjacency)) {
            queue.push(adjacency)
            visitedNodes.add(adjacency)
        }}
      }
    }
    return output; 
  }
}

module.exports = {Graph, Node}