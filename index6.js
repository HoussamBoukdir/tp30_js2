let t1=[2, 5, 4];
let t2=[...t1];
console.log("t2 ", t2)

let t3=t1;
t1[0]=-2;
console.log("t1 ", t1);
console.log("t2 ", t2);
console.log("t3 ", t3);
