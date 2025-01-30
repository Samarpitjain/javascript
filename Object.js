const myKey=Symbol("Key1");
const MyObject=
{

    Firstname:"Samarpit",
    "LastName":"jain",
    [myKey]:"Symbolkey",
    Age:20,
    Email:"samarpitjainsj3@gmail.com",
    islogined:false,
}
const {Firstname: Name}=MyObject//deconstruct(Firstname:Name)
console.log(Firstname);


