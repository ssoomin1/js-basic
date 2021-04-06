//DFS를 알고리즘으로 표현하기  => 스택,LIFO 에러가 나는 이유는?
'use strict';

const graph={
    0:[],
    1:[2,3,8],
    2:[1,7],
    3:[1,4,5],
    4:[3,5],
    5:[3,4],
    6:[7],
    8:[1,7]
};

const dfs=(graph,startNode)=>{
    let needVisitStack=[]; //탐색을 해야할 노드들
    let visitedQueue=[]; //탐색을 마친 노드들

    needVisitStack.push(startNode);

    //탐색을 해야할 노드들이 남아있다면
    while(needVisitStack.length !== 0 ){
        const node=needVisitStack.pop(); //bfs는 여기서 shift를 사용했었음
        if(!visitedQueue.includes(node)){
            visitedQueue.push(node);
            needVisitStack=[...needVisitStack, ...graph[node]];
        }
    }
    return visitedQueue;
};

dfs(graph,1);



