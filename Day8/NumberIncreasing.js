function numberIncreasing(n) {
  if (n === 1) return true;
  if (n < 1) return false;

  const queue = [1];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current)
    console.log("bhai me array " , queue)
    console.log("bhai me set " , visited)

    if (current === n) return true;
    if (current > n) continue; 

    if (!visited.has(current)) {
      visited.add(current);
      queue.push(current * 3);   
      queue.push(current + 5);
    }
  }

  return false; 
}
re = numberIncreasing(6);
console.log(re)