export function biasNumGenerator(min, max, N, D) {
  var a = 1,
    b = 50,
    c = D;

  var influence = Math.floor(Math.random() * 101),
    x = Math.floor(Math.random() * (max - min + 1)) + min;

  return x > N
    ? x + Math.floor(gauss(influence) * (N - x))
    : x - Math.floor(gauss(influence) * (x - N));

  function gauss(x) {
    return a * Math.exp((-(x - b) * (x - b)) / (2 * c * c));
  }
}

export function getDifficulty(_d) {
  _d = parseInt(_d);
  if (_d <= 10 && _d > 8) return "Easy";
  if (_d <= 8 && _d > 6) return "Medium";
  if (_d <= 6 && _d > 4) return "Hard";
  if (_d <= 4 && _d > 2) return "Pro";
  if (_d <= 2 && _d > 0) return "God";
}
