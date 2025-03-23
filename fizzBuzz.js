var fizzzBuzzArray = [];
var count = 1;

function insert() {
    while(count <= 100) {
        if ((count % 5 === 0) && (count % 3 === 0)) {
            fizzzBuzzArray.push("fizzBuzz");
        } else if((count % 3 === 0)) {
            fizzzBuzzArray.push("Fizz");
        } else if((count % 5 === 0)) {
            fizzzBuzzArray.push("Buzz");
        } else {
            fizzzBuzzArray.push(count);
        }
        count++;
        
    }
    console.log(fizzzBuzzArray);
    
}

insert();