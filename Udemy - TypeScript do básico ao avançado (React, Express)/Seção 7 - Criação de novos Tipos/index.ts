// 1- Generics
function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData(5));