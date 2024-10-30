// 1 - exemplo decorator

function myDecorator(){
  console.log("Iniciando decorator!")

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Executando decorator!")
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing(){
    console.log("testing")
  }
}

const myObj = new myClass();
myObj.testing()

// 2 - multiple decorators

function a(){
  console.log("Iniciando decorator a")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("executando a ")
  }
}
function b(){
  console.log("Iniciando decorator b")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("executando b ")
  }
}

class MultipleDecorators{
  @a()
  @b()
  testing(){
    console.log("testing")
  }
}

const myObj2 = new MultipleDecorators();
myObj2.testing()