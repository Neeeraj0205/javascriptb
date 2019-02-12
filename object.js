let obj ={
    a: 10,
    b: 11,
    c: {
        p: 19,
        r: {
           q: 27
        }
    }
}
console.log(obj.c.r.q)
delete obj.c.r.q ;
console.log(obj.c.r.q)     