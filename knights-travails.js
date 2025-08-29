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

function knightMoves(start, end) {
  if (start === end) return null;

  let visited = [start.toString()];

  let queue = availablePositions(start);

  let moves = 0;

  if (queue.some((a) => end.every((v, i) => v === a[i]))) {
    console.log("You made it in only 1 move!");
    return;
  }

  while (queue.length > 0) {
    let oneMove = queue.length;

    for (let i = 0; i < oneMove; i++) {
      let current = queue.shift();
      if (current === end) {
        console.log(moves);
        return moves;
      }
      let nextMoves = availablePositions(current);
      nextMoves = nextMoves.filter((el) => !visited.includes(el));

      queue.push(nextMoves);
    }
    moves += 1;
  }
}

knightMoves([1, 1], [3, 2]);
