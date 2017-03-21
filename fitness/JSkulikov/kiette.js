/**
 * Created by adm on 10.03.2017.
 */
// var kettle = {
//     volome: 2,
//     power: 2,
//     voltage: 220,
//     color: "white",
//     manufacturer: "adidas",
//
//     on:function() {
//         alert("чайник" + this.manufacturer+ " цвет" + this.color + "включен")
//     },
//     off: function () {
//         alert("чайник" + this.manutacturer + " цвет" + this.color + "выключен")
//     }
// }
// kittle.on();
// setTimeout(function () {
//     kettle.off();
// }, 6000);
//
// function isLepYear(year) {
//     var day = new Date(year, 1, 29);
//     return day.getDate() === 29;
// }
// alert(isLepYear(1996));

//
// function factorial(n) {
//     if (n === 0 || n === 1)                                    n=== 0   n== 1   >>> 1
                                                             //   fibo(n) = fibo(n-1) + fibi (n-2);
//         return 1;
//     else if (n > 1) {
//         return factorial (n - 1) * n;
//
//     }
// }
// alert(factorial(4));
// function fifo(n) {
//     var current = 1,
//         prev = 0,
//         temp;
//
//     for (var i = 1 ; i < n ; i++) {
//         temp = current;
//         current = current + prev;
//         prev = temp;
//     }
//     return current;
//
// }
// alert(fifo(9));

function fibo(n) {
    if (n === 0)
        return 1;
    else if ( n == 1)
        return 2;
    else  if ( n > 2) {
        return fibo(n) = fibo( n -1 ) + fibo( n -2 );


    }


}
alert(fifo(9));