export const Math = {
    sum: (n1:number,n2:number) => {
        return n1 + n2
    },
    sub: (n1:number,n2:number) => {
        return n1-n2
    },
    div: (n1:number,n2:number) => {
        if(n2 === 0) {
            return false
        }else {
            return n1/n2
        }
    },
    mut: (n1:number,n2:number) => {
        return n1*n2
    },
}