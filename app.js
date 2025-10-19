var display1 = document.getElementById("display1");

function press(val) {
  display1.value += val;
}

function cleardisplay() {
  display1.value = "";
}

function delchar() {
  display1.value = display1.value.slice(0, -1);
}

function calculate() {
  var text = display1.value;
  var opt = "+-*/.%";

  if (text === "") {
    display1.value = "";
    alert("Please add a number & operator");
    return;
  }

  if (opt.includes(text[0]) || opt.includes(text[text.length - 1])) {
    display1.value = "Error";
    return;
  }

  var errorFound = false;
  for (var i = 0; i < text.length - 1; i++) {
    if (opt.includes(text[i]) && opt.includes(text[i + 1])) {
      errorFound = true;
      break;
    }
  }

  if (errorFound) {
    display1.value = "Error";
  } else {
    try {
      display1.value = eval(text);
    } catch (e) {
      display1.value = "Error";
    }
  }
}
