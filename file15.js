let cart=[]
//click on add to card button on iphone product
cart = [...cart,{name:"iphone",price:50000,qty:1}]
// console.log(cart)

//click on add to card button on speaker product
cart=[...cart,{name:"speaker",price:500,qty:5}]
console.log(cart)

const order ={
    email:"rohit@gmail.com",
    items:cart,
    orderValue:55000,
    status:"pending"
}
db.orders.insertOne(order)

//create flipkart databse 
//create collecton orders email,items ,orderValue,status,orderDate
//create collection users> name ,email, password,role
//insert seed data
//wrtie aggregate query to display all the orders 
//placed by a  particular user 
