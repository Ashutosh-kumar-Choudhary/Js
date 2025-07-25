//array
// In js arrays are resizable.

// const myarray =[0,1,2,3,4,5,"ashu"]
// const myheroes=["shaktiman","Nagraj"]

// const myarr2 =new Array(1,2,3,4)

// console.log(myarray[0]);
// //Array methods

// myarray.push(8)
// myarray.push(9)
// myarray.push(10)
// // // console.log(myarray);
// // myarray.pop()
// // // console.log(myarray);
// // myarray.unshift(2)
// // myarray.shift()
// // console.log(myarray);
// // console.log(myarray.includes(9));
// // console.log(myarray.indexOf(4));
// const newarr =myarray.join()
// console.log(myarray);
// console.log(typeof myarray);
// console.log(newarr);
// console.log(typeof newarr);
// //slice ,splice
// console.log("A",myarray);
// const myn1=myarray.slice(1,3)
// console.log(myn1);
// console.log("B",myarray);


// const myn2 =myarray.splice(1,3)
// console.log(myn2);
// console.log("c",myarray);

//******************************************************* */

const marvel_heros =["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros);
// const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const Real_another_array =another_array.flat(Infinity)
// console.log(Real_another_array);

// console.log(Array.isArray("Ashutosh"));
// console.log(Array.from("Ashutosh"));
// console.log(Array.from({name: "Ashutosh"}));// Intresting case


let score1 =100
let score2= 200
let score3 = 300
 
console.log(Array.of(score1,score2,score3));


