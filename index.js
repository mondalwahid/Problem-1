const string = "wahid mondal";

function getCounts(string) {
  const sequence = [];

  for (let i in string) {
    const character = string[i];
    if (!sequence[character]) {
      sequence[character] = 0;
    }
    sequence[character]++;
  }
  return sequence;
}

console.log(getCounts(string.split(" ").join("")));
