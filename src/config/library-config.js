export const libraryConfig = [
  {
    name: 'Linked List',
    path: 'data-structures/linked-list.js',
    tags: ['Data Structure']
  },
  {
    name: 'Stack',
    path: 'data-structures/stack.js',
    tags: ['Data Structure']
  },
  {
    name: 'Queue',
    path: 'data-structures/queue.js',
    tags: ['Data Structure']
  },
  {
    name: 'Hash Table',
    path: 'data-structures/hash-table.js',
    tags: ['Data Structure']
  },
  {
    name: 'Binary Search Tree',
    path: 'data-structures/binary-search-tree.js',
    tags: ['Data Structure', 'Searching', 'Recursion', 'Tree']
  },
  {
    name: 'Trie',
    path: 'data-structures/trie.js',
    tags: ['Data Structure', 'Searching', 'Recursion', 'Tree']
  },
  {
    name: 'Heap',
    path: 'data-structures/heap.js',
    tags: ['Data Structure', 'Recursion', 'Tree']
  },
  {
    name: 'Graph',
    path: 'data-structures/graph.js',
    tags: ['Data Structure'],
    testArgs: [
      [1, 2, 3, 4, 5],
      [[0, 1, 0, 1, 0],
       [0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0],
       [0, 0, 1, 0, 1],
       [1, 0, 0, 0, 0]]
    ]
  },
  {
    name: 'Merge Sort',
    path: 'algorithms/sorting/merge-sort.js',
    tags: ['Algorithm', 'Sorting', 'Recursion']
  },
  {
    name: 'Insertion Sort',
    path: 'algorithms/sorting/insertion-sort.js',
    tags: ['Algorithm', 'Sorting']
  },
  {
    name: 'Quick Sort',
    path: 'algorithms/sorting/quick-sort.js',
    tags: ['Algorithm', 'Sorting', 'Recursion']
  },
  {
    name: 'Bucket Sort',
    path: 'algorithms/sorting/bucket-sort.js',
    tags: ['Algorithm', 'Sorting']
  },
  {
    name: 'DFS',
    path: 'algorithms/searching/dfs.js',
    tags: ['Algorithm', 'Searching', 'Recursion'],
    testArgs: [
      [1, 2, 3, 4, 5],
      [[0, 1, 0, 1, 0],
       [0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0],
       [0, 0, 1, 0, 1],
       [1, 0, 0, 0, 0]],
      false
    ]
  },
  {
    name: 'BFS',
    path: 'algorithms/searching/bfs.js',
    tags: ['Algorithm', 'Searching', 'Recursion'],
    testArgs: [
      [1, 2, 3, 4, 5],
      [[0, 1, 0, 1, 0],
       [0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0],
       [0, 0, 1, 0, 1],
       [1, 0, 0, 0, 0]],
      false
    ]
  },
  // {
  //   name: 'Dijkstra',
  //   path: 'algorithms/shortest-path/dijkstra.js',
  //   tags: ['Array', 'Shortest Path'],
  //   testArgs: [
  //     [1, 2, 3, 4, 5],
  //     [[Infinity, 2, Infinity, 3, Infinity],
  //      [Infinity, Infinity, Infinity, Infinity, 6],
  //      [Infinity, Infinity, Infinity, Infinity, Infinity],
  //      [Infinity, Infinity, 4, Infinity, 2],
  //      [1, Infinity, Infinity, Infinity, Infinity]],
  //     true
  //   ]
  // },
  {
    name: 'Binary Search',
    path: 'algorithms/searching/binary-search.js',
    tags: ['Array', 'Searching']
  },
  {
    name: 'Largest Contiguous Subarray',
    path: 'algorithms/searching/largest-contiguous-subarray.js',
    tags: ['Array', 'Searching']
  },
  {
    name: 'Tree Traversal',
    path: 'algorithms/traversal/tree-traversal.js',
    tags: ['Algorithm', 'Traversal', 'Recursion', 'Tree']
  }
];
