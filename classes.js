class user
{
    //classer constructor needed
    constructor(username)
    {
        this.username=username;
    }
   
}
class Teacher extends user
{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password;

    }
}
const newTeacher= new Teacher('samarpit','abc@gmail.com','12345678')
console.log(newTeacher);
