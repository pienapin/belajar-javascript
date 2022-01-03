
// ------- 16
// var x = 10;
// var y = 20;
// var lagi = true;

// console.log(x+y);
// // alert
// alert('Hello World!');


// while ( lagi === true) {
//   // prompt
//   var nama = prompt('masukkan nama:');
//   alert('Halo ' + nama + '!');
  
//   // confirm
//   lagi = confirm('ganti?');
// }

// // alert('nice');

// ------- 18
// while (false) {
//   console.log('Hello World!');
// }

// let x = 0;
// while (x <= 10) {
//   console.log('Hello World ' + x + '!');
//   x++;
// }

// angkot1.js
// let no = 1;
// while (no <= 10) {
//   console.log('Angkot No. ' + no + ' beroperasi dengan baik.');
//   no++;
// }

// ------- 20
// for (let index = 0; index < 10; index++) {
//   console.log('Hello World ' + (index+1) + '!');
// }
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//   console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//   noAngkot++;
// }

// for (noAngkot = noAngkot; noAngkot <= 10; noAngkot++) {
//   console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
// }

// ------- 22
// let noAngkot;
// let jmlAngkot = 10;
// let angkotBeroperasi = 6;

// for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi && noAngkot !== 5)
//     console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik.');
//   else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5)
//     console.log('Angkot no. ' + noAngkot + ' sedang lembur.');
//   else
//     console.log('Angkot no. ' + noAngkot + ' sedang tidak beroperasi.');
// }

// ------- 25
// let s = '';
// segitiga siku siku
// for (let i = 0; i < 10; i++) {
//   for (let k = 10; k > i; k-- ) {
//     s += ' ';
//   }
//   for (let j = i; j > 0; j--) {
//     s += '*';
//   }
//   s += '\n';
// }

// for (let i = 10; i > 0; i--) {
//   for (let k = 10; k > i; k--) {
//     s += ' ';
//   }
//   for (let j = i; j > 0; j--) {
//     s += '*';
//   }
//   s += '\n';
// }

// Segitiga sama sisi
// for (let i = 11; i > 0; i--) {
//   for (let k = 11; k >= i; k--) {
//     if (k%2===0 && i%2!==0)
//       s += ' ';
//   } 
  
//   for (let j = i; j > 0; j--) {
//     if (j%2!==0)
//       s += '*';
//   } 

//   if (i%2===0)
//     s += '\n';
// }

// Segitiga sama sisi
// for (let i = 0; i < 11; i++) {
//   let x = ''+1;
//   for (let k = 11; k >= i; k--) {
//     if (k%2===0 && (i%2!==0 || i === 0))
//       s += ' ';
//   } 
  
//   for (let j = i; j >= 0; j--) {
//     if (j%2===0)
//       s += x;
//   } 

//   if (i%2===0)
//     s += '\n';
// }

// console.log(s);

// ------- 26
