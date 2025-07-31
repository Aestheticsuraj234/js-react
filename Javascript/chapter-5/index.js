// // //  let fruits = new Array("🍍" , "🍎" , "🍇" , "🍈");

// // let fruits = ["🍍" , "🍎" , "🍇" , "🍈"];

// // fruits[0] = "🍌";

// // console.log(fruits.length-1)

// // // let items = ["suraj" , 21 , true , [12,4334]]

// // let arr = [1, , 3]; // index 1 is a "hole"
// // console.log(arr[1]); // undefined

// // let matrix = [ [1, 2],[3, 4] ];

// // console.log(matrix[0][0])

// // const arr = [1,23,4,5,6];

// // arr.push(10);
// // console.log(arr)

// // const arr = [12,3,56,7];
// // let res = arr.pop();
// // console.log(arr , res)

// // shift
// // unshift

// // *Splice Method
// // 1. remove
// // const arr1 = [1,2,3,4];

// // arr1.splice(0 ,2 )
// // console.log(arr1)

// // // 2. replace

// // const arr2 = [1,2,3,4];

// // arr2.splice(0 , 2 , "Suraj" , "Jhon")

// // console.log(arr2)

// // // 3. Adding

// // const arr3 = [1,2,3,4];

// // arr3.splice(0 , 0 , "Suraj" , "Jhon")

// // console.log(arr3)

// // const arr = [2,4,0,1,3];

// // arr.sort((a,b)=>b-a)

// // console.log(arr)

// //  const arr3 = [1,2,3,4];

// //  arr3.reverse();

// //  console.log(arr3)

// //  What is shallow copy and what is deep copy

// // @codesnippet003

// const arr = [1,2,3];

// let newData = arr.slice(0,2);

// console.log(newData);
// console.log(arr)

// const a = [1], b = [2];
// const result = a.concat(b); // [1, 2]
// console.log(result)

// const array = ["suraj" , Date.now() ,"1290380291832091" ];

// console.log(array.join("~"))

// const values = [1,2,3,4,5];

// const newArray = values.map((currentValue , index , arr)=>{
//     return currentValue * 2
// })

// console.log(newArray)

// values.forEach((currentValue , index , array)=>{
//     console.log(currentValue * 2)
// })

// const values = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const res = values.filter((curr , i , arr)=>{
//     return curr % 2 === 0
// })

// console.log(res)

// const price = [1,2,3,4,5]

// let total = price.reduce((acc , crr)=>{
//     return acc + crr
// },0)

// console.log(total)