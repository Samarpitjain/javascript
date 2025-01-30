//for of loop mostly use for arrays no need of incrementation
const arr1=[1,2,3,4,5,6];
for (const num of arr1) {
    // console.log(num);
    
}
const str="Samarpit";
for (const name of str) {
   // console.log(str);
    
}
//maps are mot iteratable
const map=new Map()
map.set("USA","united state of amrica")
map.set("IN","india")
map.set("FR","france")
for (const key of map) 
{
    //console.log(key);//output as string
       
}
for (const [key,value] of map) 
{
    //console.log(key,":-",value);//not printing as string
       
}
for (const key of map) 
{
   // console.log(map);//print as many alement are there in map scope
           
}
//the forof loop is not  supported for object
// so we use forof loop for object 
const myobject=
{
    MP:"Madhyapradesh",
    MH:"maharastra",
}
for (const key in myobject) {
    //console.log(`${key} :- ${myobject[key]}`);
    
}
const arr2=[1,2,3,4,5];
for (const value in arr2) {
    //console.log(value,arr1[value]);
    
}
//foreach loop in it  a callback function (without function name) is used with some parameters
const language=["Hindi","English","Panjabi","Tamil"]
language.forEach(function(value){
   //console.log(value);
    
})
language.forEach((value)=>{
    //console.log(value);
    
})
//calling function in for each loop
function printMe(items)
{
    //console.log(items);
    
}

language.forEach(printMe)

