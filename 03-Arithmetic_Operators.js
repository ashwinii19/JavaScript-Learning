// arithmetic operators = operands (values, variables, etc.)
//                        operands (+ - * /)
//                        ex. 11 = x+5;
/*
    operator precedence
    1. parenthesis()
    2. exponents
    3. multiplication & divison & modulo
    4. addition & subtraction
*/

let students = 30;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;  //exponents
students = students % 3;

students += 2;
students -= 2;
students *= 2;
students /= 2;

students++;
students--;


console.log(students);