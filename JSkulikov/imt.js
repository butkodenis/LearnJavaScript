/**
 * Created by adm on 13.03.2017.
 */
//    var user = prompt("введите число");
//
//
//    function ball(a) {
//
//        if (a >= 0 || a<=5)
//        {
//            alert("очень плохо");
//
//        }
//        else if ( a > 5 || a<= 9)
//        {
//            alert("хорошо");
//        }
//        else  if (a > 9 || a <= 12)
//        {
//            alert("отлично");
//        }
//    }
//
//var rez = ball(user);

var number1 = prompt("введите первое число");
number2 = prompt("ввдите второе число");
fun = prompt("введите арифметическое действие");


function summ(rezult) {

    return rezult = Number(number1) + Number(number2) ;
};
function multiplication(rezult) {

    return rezult = number1 * number2;
};
function division(rezult) {

    return rezult = number1 / number2;
}
function minus(rezult) {

    return rezult = number1 - number2;
}

if (fun == "+"){
    alert(summ());
}
else if (fun == "-"){
    alert(minus());
}
else if (fun == "*"){
    alert(multiplication());

}
else  if (fun == "/"){
    alert(division());
}