function availablePositions(position) {
  let x = position[0];
  let y = position[1];

  let array = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  let filtered = array.filter(
    (p) => p[0] >= 0 && p[1] >= 0 && p[0] < 8 && p[1] < 8
  );
  console.log(filtered);

  return filtered;
}

availablePositions([1, 1]);

function knightMoves(start, end) {
  // let startX = start[0];
  // let startY = start[1];
  // let end = end;

  //choose a data structure

  //decide with search algorithm

  //start with [0,0] to [2,1]

  //use BFS
  //use a queue to keep track of the next positions to explore
  let queue = [];

  //track visited positions to avoid loops or unnecessary repeats
  let visitedPositions = [];
}

function levelOrderForEach(root, callback) {
  if (typeof callback !== "function") {
    throw new Error("Function parameter is not a callback function!");
  }

  if (root === null) return;

  let queue = [root];

  while (queue.length > 0) {
    callback(queue[0].data);
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);
    queue.shift();
  }
}

function height(root, value) {
  let node = find(root, value);
  console.log(node);
  if (!node) return null;

  let queue = [node];
  let height = -1;

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    height++;
  }
  console.log(height);
  return height;
}

function depth(root, value) {
  if (root === null) return;

  let curr = root;
  let queue = [curr];
  let depth = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      curr = queue.shift();
      if (curr.data === value) {
        console.log(depth);
        return depth;
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    depth++;
  }
  return false;
}
