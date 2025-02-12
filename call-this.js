function SetUserName(username)
{
    this.username=username;
    //console.log(username);
    

}
function Createuser(username,email,passward)
{
    SetUserName.call(this,username);//calling is for "call" the function and to be in stack to use 
    // and "this" is for refrencing the current execution context.
    
    this.email=email;
    this.passward=passward;
}
const newUser= new Createuser('samarpit','samar@12','123xyz');
console.log(newUser);


