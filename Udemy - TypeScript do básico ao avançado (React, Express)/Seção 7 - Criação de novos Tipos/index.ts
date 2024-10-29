// 1- Generics
function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData(5));

// 2 - constraint em generic

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto e ${obj.name}`;
}

console.log(showProductName({ name: "Boneco", category: "Brinquedo" }))