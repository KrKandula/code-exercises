//company:Amazon|frontend-engineer|phone-interview
//06-29-2020
//solution: https://plnkr.co/edit/AfwbNUVbZhElCRCk

//given input like below
/* <html>
  <head>
    <title>Foo Bar Baz Qux</title>
  </head>
  <body>
    <form id="foo-bar" >
      <input type="text" name="foo.bar" />
    </form>
    <form id="foo-bar-baz-qux" >
      <input type="text" name="foo.bar" />
      <input type="text" name="foo.baz.qux" />
      <input type="text" name="qux" />
    </form>
  </body>
</html> */

//generate output like below:

//form1
// var fooBar = {
//   foo : {
//     bar : ''
//   }
// };

// //form2
// var fooBarBazQux = {
//   foo : {
//     bar : '',
//     baz : {
//       qux : ''
//     }
//   },
//   qux : ''
// };



//JS

// Expected output from the function for the above two forms
// var fooBar = {
//       foo : {
//         bar : ''
//       }
// };

// var fooBarBazQux = {
//   foo : {
//     bar : '',
//     baz : {
//       qux : ''
//     }
//   },
//   qux : ''
// };


//=========================

// document.addEventListener('DOMContentLoaded', function () {
//   let fooBarBazQux = generateFormJSON('foo-bar-baz-qux')
//   console.log(fooBarBazQux)

//   function generateFormJSON(formId) {
//     let form = document.getElementById(formId);
//     let inputs = form.querySelectorAll('[type=text]');
//     let inputsArray = Array.from(inputs)
//     let select = form.querySelectorAll('select')
//     let selectArr = Array.from(select);
//     inputsArray = inputsArray.concat(selectArr)
//     let radios = form.querySelectorAll('[type=radio]:checked')
//     inputsArray = inputsArray.concat(Array.from(radios));

//     let main = {}
//     let current;
//     for(let i=0;i<inputsArray.length;i++) {
//       current=main;
//       nameArr = inputsArray[i].name.split('.');
//       let j=0;
//       while(j<nameArr.length) {
//         if ((j+1) == nameArr.length) { //last element
//           current[nameArr[j]] = inputsArray[i].value;
//         } else if (typeof current[nameArr[j]] == 'undefined'){
//           current[nameArr[j]] = {}
//         } 
//         current = current[nameArr[j]];
//         j++;
//       }
//     }
//     return main;
//   }
// })