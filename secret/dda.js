let date = new Date();

function getAge(age) {

    let current = date.getFullYear();
    
    let personAge = current - age;

    if(personAge < 4) {
        console.log(personAge + "\nLittle baby");
    }

    else if((personAge > 10) && (personAge < 20)) {
        console.log(personAge + "\na Boy");
    }

    else if((personAge > 20) && (personAge < 30)) {
        console.log(personAge + "\nYoung man");
    }

    else if((personAge > 30) && (personAge < 50)) {
        console.log(personAge + "\nGrown man");
    }

    else if(personAge > 50) {
        console.log(personAge + "\nOld man")
    }


}

getAge(2008);