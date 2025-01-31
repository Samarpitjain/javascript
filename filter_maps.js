const students = [
    {
        id: 1,
        name: "Amit Sharma",
        age: 22,
        course: "B.Tech CSE",
        grade: "A",
        city: "Delhi"
    },
    {
        id: 2,
        name: "Priya Verma",
        age: 22,
        course: "B.Sc Mathematics",
        grade: "B+",
        city: "Mumbai"
    },
    {
        id: 3,
        name: "Rahul Singh",
        age: 20,
        course: "BCA",
        grade: "A-",
        city: "Bangalore"
    },
    {
        id: 4,
        name: "Sneha Patel",
        age: 23,
        course: "M.Tech AI",
        grade: "A+",
        city: "Hyderabad"
    }
];
//filter returns the value  if you use scope({}) musr use return 

const Studentinformation = students.filter((key)=> key.city==="Hyderabad")
//console.log(Studentinformation);



//map is also used it also return in true and false formate 
//if no operatin is prformed  value also remember if you use scope({}) musr use return
const information1=students.map((key)=>key.age===22)
//console.log(information1);



const information2=students.map((key,value)=>key.age+1)
//console.log(information2);

//array.reduce()
const arrray1=[1,2,3,4,5,6];
const initialvalue=0;
const SumWithInitial=arrray1.reduce((value,currentvalue)=> value+currentvalue,initialvalue);
//console.log(SumWithInitial);


const arr2=[1,2,3]
const Totalsum=arr2.reduce((acc,currval)=>
{
    //console.log(`acc:- ${acc} and currval:- ${currval}`);
    return acc+currval;
},1)
//console.log(Totalsum);

const cart = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 599.99,
        quantity: 2,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        price: 1299.50,
        quantity: 1,
        category: "Electronics"
    },
    {
        id: 3,
        name: "T-Shirt",
        price: 499.00,
        quantity: 3,
        category: "Clothing"
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 2299.99,
        quantity: 1,
        category: "Footwear"
    },
    {
        id: 5,
        name: "Water Bottle",
        price: 299.00,
        quantity: 2,
        category: "Accessories"
    }
];
const TotalPrice=cart.reduce((acc,Total)=> acc+Total.price,0);
console.log(TotalPrice);






