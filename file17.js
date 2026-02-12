// const products=[
//     {id :1,name:"destop",price:3000,discription:"hp"},
//     {id :2,name:"iphone",price:50000,discription:"iphone17"},
//     {id :3,name:"macbook",price:100000,discription:"m1 chip"}
// ];
// products.forEach((product)=>console.log(product))




// now we push to cart using for each
const products=[
    {id :1,name:"destop",price:3000,discription:"hp"},
    {id :2,name:"iphone",price:50000,discription:"iphone17"},
    {id :3,name:"macbook",price:100000,discription:"m1 chip"}
];
const cart=[]
products.forEach((product)=>{
    product.qty=1
    product.total = product.price*product.qty
cart.push(product)
})
console.log(cart);
