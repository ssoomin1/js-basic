//BFS를 알고리즘을 만들어보기 => 큐,FIFO
'use strict';

const graph={
    0: [],
    1:[2,3,8],
    2:[1,7],
    3:[1,4,5],
    4:[3,5],
    5:[3,4],
    6:[7],
    7:[2,6,8],
    8:[1,7]
};

const bfs=(graph,startNode)=>{
    let needVisit=[]; //탐색해야하는 노드 [1]
    let visited=[]; //이미 탐색한 노드 []
    
    needVisit.push(startNode);
    while(needVisit.length !==0 ){ //탐색해야할 노드가 남아있다면 
        const node=needVisit.shift(); //앞에서부터 빼내기
        if(!visited.includes(node)){
            visited.push(node);
            needVisit=[...needVisit,...graph[node]];
        }
    }
    return visited;  
};

console.log('BFS알고리즘 -FIFO')
console.log(bfs(graph,1));