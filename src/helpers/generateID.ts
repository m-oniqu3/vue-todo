export function* generateID() {
  let val = 1

  while (true) {
    yield val++
  }
}
