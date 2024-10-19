async function test(){
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        return 2;
    } catch(error){
        throw error;
    }
    
}

test().then((res) => console.log(res));
console.log('second');
