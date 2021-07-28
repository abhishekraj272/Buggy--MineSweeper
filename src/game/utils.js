export function biasNumGenerator(min, max, bias, influence) {
  const rnd = Math.random() * (max - min) + min; // random in range
  const mix = Math.random() * influence; // random mixer
  return rnd * (1 - mix) + bias * mix;
}
