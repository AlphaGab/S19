
let role ;
let username ;
let password;

let login = () =>{
    const emptyNotif = "Input is Empty Try again";
    role = prompt("Enter Role");
    if(role.trim().length === 0){
        alert(emptyNotif);
        return;
    }
    username = prompt("Enter Username");  
    if(username.trim().length === 0){
        alert(emptyNotif);
        return;
    }
    password = prompt("Enter Password");
    if(password.trim().length === 0){
        alert(emptyNotif);
        return;
    }
    else{
        switch(role.toUpperCase().trim()) {
            case "ADMIN":
              alert(`Welcome Back Admin ${username}`)
              break;
            case "TEACHER":
              alert(`Welcome Back Teacher ${username}`)
              break;

            case "STUDENT":
                alert(`Welcome Back Student ${username}`)
               let p1 = parseInt(prompt("Enter First Score"))
               let p2 = parseInt(prompt("Enter Second Score"))
                let p3 = parseInt(prompt("Enter Third Score"))
               let p4 = parseInt(prompt("Enter Fourth Score"))
               average = average(p1,p2,p3,p4)
               gradesComment(average)
                break;
            default:
                alert("Role not in range")
          }
    }
    
}
function average(p1,p2,p3,p4){  
    let grades = [p1,p2,p3,p4];
    let sum = 0;
    grades.forEach(element => {
        sum +=element;
    });
    average = Math.round(sum/grades.length)
    return average

}
function gradesComment(average){
    if(average >= 96){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is A+`)
    }
    else if (average >= 90){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is A`)
    }
    else if (average >= 85){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is B`)
    }
    else if (average >= 75){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is C`)
    }
    else if (average <= 74){
        console.log(`Hello, student, your average is ${average}. The letter equivalent is f`)
    }
}


login()