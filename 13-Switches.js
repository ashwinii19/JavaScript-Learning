// // SWITCH = can be an efficient replacement to many else if statements

// // --------------- DAYS ----------------------
let day = 3;

switch(day){
    case 1:
        console.log(`Its a MONDAY`);
        break;
    case 2:
        console.log(`Its a TUESDAY`);
        break;
    case 3:
        console.log(`Its a WEDNESNDAY`);
        break;
    case 4:
        console.log(`Its a THURSDAY`);
        break;
    case 5:
        console.log(`Its a FRIDAY`);
        break;
    case 6:
        console.log(`Its a SATURDAY`);
        break;
    case 7:
        console.log(`Its a SUNDAY`);
        break;
    default:
        console.log(`${day} is NOT a day`);
        break;
}

// // --------------------- SCORE -------------------------------
let testScore = 10;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = `A`;
        break;
    case testScore >= 80:
        letterGrade = `B`;
        break;
    case testScore >= 70:
        letterGrade = `C`;
        break;
    case testScore >= 60:
        letterGrade = `D`;
        break;
    default:
        letterGrade = `F`;
}

console.log(letterGrade);