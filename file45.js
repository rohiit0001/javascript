// function getStudentInfo(){
//     return new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         const userObj ={
//             name:"rohit",
//             emial:"rohit@gmail.com",
//             age:21
//         }
//         resolve(userObj)
//     },2000)
// })}
// async function main() { 
//     const result = await getStudentInfo()
//     console.log(result)

//     console.log("program completed successfully")
   
//    }
//     main()













//     function getStudentInfo(){
//     return new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         const userObj ={
//             name:"rohit",
//             emial:"rohit@gmail.com",
//             age:21
//         }
//         resolve(userObj)
//     },2000)
// })
// }
// function displayInfo(userObj){
//     console.log(userObj.name)
// }
// async function main() { 
//     const result = await getStudentInfo()
//     displayInfo(result)
//     console.log("program completed successfully")
   
//    }
//     main()









    //another method to write only name 
    
    function getStudentInfo(){
    return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        const userObj ={
            name:"rohit",
            emial:"rohit@gmail.com",
            age:21
        }
        resolve(userObj)
    },2000)
})
}
function displayInfo({name}){
    console.log(name)
}
async function main() { 
    const result = await getStudentInfo()
    displayInfo(result)
    console.log("program completed successfully")
   
   }
    main()
