// const products=[
//     {id :1,name:"destop",price:3000,discription:"hp" ,category:"electronics"},
//     {id :2,name:"iphone",price:50000,discription:"iphone17",category :"electronics"},
//     {id :3,name:"macbook",price:100000,discription:"m1 chip",category:"electronics"},
//     {id :4,name:"destop",price:3000,discription:"hp" ,category:"electronics"},
//     {id :5,name:"iphone",price:50000,discription:"iphone17",category :"electronics"},
//     {id :6,name:"macbook",price:100000,discription:"m1 chip",category:"electronics"}
// ];
// const cart =[]
// function addToCart(id){
//     const product = products.find(product => product.id === id);
//     // if(product){
//         cart.push(product     
//         );
//     // }
// }
// addToCart(1)
// addToCart(3)
// addToCart(5)
// console.log(cart)







const products = [
    {id:1,name:"desktop",price:3000,description:"hp",category:"electronics"},
    {id:2,name:"iphone",price:50000,description:"iphone17",category:"electronics"},
    {id:3,name:"macbook",price:100000,description:"m1 chip",category:"electronics"},
    {id:4,name:"desktop",price:3000,description:"hp",category:"electronics"},
    {id:5,name:"iphone",price:50000,description:"iphone17",category:"electronics"},
    {id:6,name:"macbook",price:100000,description:"m1 chip",category:"electronics"}
];
const cart = [];
function addToCart(id){
    const product = products.find(p => p.id === id);
    if(product){
        cart.push({
            ...product,
            quantity: 1,
            total: product.price   
        });
    }
}
function increment(id){
    const item = cart.find(p => p.id === id);
    // if(item){
        item.quantity++;
        item.total = item.quantity * item.price;
    // }
}
function decrement(id){
    const item = cart.find(p => p.id === id);
    // if(item && item.quantity > 1){
        item.quantity--;
        item.total = item.quantity * item.price;
    // }
}
const userEmail = "rohit@gmail.com"; 
function calculateTotal(){
    let total = 0;

    for(let item of cart){
        total += item.total;
    }

    return total;
}
function placeOrder(){
    if(cart.length === 0){
        console.log("Cart is empty");
        return;
    }
    const total = calculateTotal();

    const order = {
        email: userEmail,
        items: cart,
        orderValue: total
    };
    console.log("Order placed successfully");
    console.log(order);
    console.log("Total order value:", total);

    cart.length = 0;
}
addToCart(1);
addToCart(3);
addToCart(5);
increment(1);
increment(5);
decrement(1);
console.log(cart);
placeOrder();



