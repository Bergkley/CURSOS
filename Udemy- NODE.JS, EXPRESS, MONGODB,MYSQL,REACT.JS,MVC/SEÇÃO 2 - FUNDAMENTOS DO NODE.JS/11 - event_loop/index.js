function a (){
    console.log("Execuntado a ()");
}

function b (){
    console.log("Execuntado b ()");
}

function c (){
    console.log("Execuntado c ()");
    a()
    b()
}

b();
c();
a();
