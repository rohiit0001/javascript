const products=[
    {id :1,name:"destop",price:3000,discription:"hp" ,category:"electronics"},
    {id :2,name:"iphone",price:50000,discription:"iphone17",category :"electronics"},
    {id :3,name:"macbook",price:100000,discription:"m1 chip",category:"electronics"},
     {id :4,name:"destop",price:3000,discription:"hp" ,category:"electronics"},
    {id :5,name:"iphone",price:50000,discription:"iphone17",category :"electronics"},
    {id :6,name:"macbook",price:100000,discription:"m1 chip",category:"electronics"}
];
let search ="iphone"
const resultArray= products.filter((product)=>{
    return product.name===search
    })
console.log(resultArray);



