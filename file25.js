// numbers =[5,3,6,1]

// // numbers.foreach(()=>{})
// // forEach() is used to loop through each element of an array and perform some action.
// numbers.foreach(()=>{
//     console.log(numbers)
// })


// // numbers.map(()=>{})
// // map() is used to loop through an array and create a NEW array by transforming each element.
// numbers.map(()=>{
//     console.log(map)
// })


// const newArray = numbers.map((number)=>{
// return number+1
// })
// console.log(newArray)


//// numbers.find(()=>{})
// // find() is used to search an array and return the FIRST matching element.
// const result= numbers.find((number)=>{
//     return number === 3
// })
// console.log(result)


// //numbers.reduce(()=>{})
// // reduce() is used to reduce an array into a single value
//  const result = numbers.reduce((number,sum)=>{
// return sum + number
//  },0)
//  console.log(result)


// // numbers.filter(()=>{})
// // filter() is used to select elements that match a condition and returns a NEW array.
// const evenNumber = numbers.filter((number)=>{
//     return number%2==0
// })
// console.log(evenNumber)



// let marks = [70,80,60,90,100]
// const result= marks.some((mark)=>{
//     return mark > 100;
// })
// if (result) console.log ("pass")
//     else 
// console.log("fail")




// let marks = [70,80,60,90,100]
// const result= marks.every((number)=>{
//     return number > 70;
// })
// console.log(result)



let marks = [70,80,60,90,100]
const result= marks.every((mark)=>{
    return mark > 50;
})
if (result) console.log ("pass")
    else 
console.log("fail")
