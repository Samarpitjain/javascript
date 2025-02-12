// const promiOsne =new Promise(function(resolve,reject)
// {
//     const event=true;
//     if(event)
//         {setTimeout(function()
//     {
//         console.log("Async task is compelete");
//         resolve()
//     },1000)}
//     else
//     {
//         console.log('false');
        
//     }
        
// })
// promiOsne.then(()=>{
//     console.log('yes');
    
// }
// )
// promiOsne.catch(()=>
// {
//     console.log('no');
    
// })
new Promise((resolve,reject)=>
{
    setTimeout(()=>
        {
            resolve({username:"samarpit", password:"1234xyz"})
        },1000)
}).then((user)=>
{
    console.log(user);
    return user.username;
}).then((username)=>
{
    console.log(username);
    
})
