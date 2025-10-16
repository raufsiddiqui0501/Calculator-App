// var display = document.getElementById("display");

// function press (val) {
//     display.value += val;
// }
// function cleardisplay() {
//     display.value = "";
// }
// function delchar () {
//     display.value = display.value.slice(0,-1);
// }
// function calculate () {
//     var text = display.value;
//     var opt = "+-*/.%";
//     if(text === "" ) {
//         display.value = "";
//         alert("Pleased add an number & operator");
//         return;
//     }
    
//     if (opt.includes(text[0])  || opt.includes(text[text.length -1])) {
//         display.value = "Error";
//         return;
//     }
// }
// var errorFound = false;
// for(var i =0; i <text.length -1; i++){
//     if (opt.includes(text[i]) && opt.includes(text[i+1])){
//         errorFound=true;
//         break;
//     }
// }
// // if(errorFound) {
// //     display.value = "Error";
// // }else{
// //     display.value= eval(text)
// // }
// if (errorFound) {
//     display.value = "Error";
//   } else {
//     try {
//       display.value = eval(text);
//     } catch (e) {
//       display.value = "Error";
//     }
//   }





var display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function cleardisplay() {
  display.value = "";
}

function delchar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  var text = display.value;
  var opt = "+-*/.%";

  // agar input empty hai
  if (text === "") {
    display.value = "";
    alert("Please add a number & operator");
    return;
  }

  // agar first ya last character operator hai
  if (opt.includes(text[0]) || opt.includes(text[text.length - 1])) {
    display.value = "Error";
    return;
  }

  // agar do operators ek sath likhe hain jaise ++, **, //, etc.
  var errorFound = false;
  for (var i = 0; i < text.length - 1; i++) {
    if (opt.includes(text[i]) && opt.includes(text[i + 1])) {
      errorFound = true;
      break;
    }
  }

  if (errorFound) {
    display.value = "Error";
  } else {
    try {
      display.value = eval(text);
    } catch (e) {
      display.value = "Error";
    }
  }
}
