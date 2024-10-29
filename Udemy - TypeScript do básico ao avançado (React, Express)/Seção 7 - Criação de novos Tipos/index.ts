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

// 3 - generic com interface
interface MyObject<T, U> {
  name: string;
  wheels: T;
  engine:U;
}

type Car = MyObject<number, number>;
type Pen = MyObject<boolean, boolean>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0 };
const myPen: Pen = { name: "Caneta", wheels: true, engine: false }

console.log(myCar, myPen)