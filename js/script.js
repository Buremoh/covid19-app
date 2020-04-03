function redirect1() {
  let positive = document.getElementById("positive");
  let negative = document.getElementById("negative");

  if (document.getElementById("positive").checked) {
    location.href = "personal-advice.html";
  } else {
    location.href = "age-personal.html";
  }
}
function redirect2() {
  if (document.getElementById("child").checked) {
    location.href = "under-18.html";
  } else if (document.getElementById("young").checked) {
    location.href = "18-64.html";
  } else {
    location.href = "65-older.html";
  }
}

function checkSubmit(ele, id) {
  x = document.getElementById(id);
  if (ele.checked == true) x.disabled = false;
  else x.disabled = true;
}
//for the page:18-64.html
let checkboxes = $("input[type='checkbox']"),
  submitButt = $("input[type='Submit']");

checkboxes.click(function() {
  submitButt.attr("disabled", !checkboxes.is(":checked"));
});

function redirect3() {
  let positive = document.getElementById("yes");
  let negative = document.getElementById("no");

  if (document.getElementById("yes").checked) {
    location.href = "personal-demo.html";
  } else {
    location.href = "personal-demo.html";
  }
}
function redirect4() {
  let positive = document.getElementById("positive");
  let negative = document.getElementById("negative");

  if (document.getElementById("positive").checked) {
    location.href = "personal-advice.html";
  } else {
    location.href = "age-personal.html";
  }
}
function redirect5() {
  let positive = document.getElementById("positive");
  let negative = document.getElementById("negative");

  if (document.getElementById("positive").checked) {
    location.href = "others-advice.html";
  } else {
    location.href = "age-others.html";
  }
}
//age-others.html
function redirect6() {
  if (document.getElementById("child").checked) {
    location.href = "under-18.html";
  } else if (document.getElementById("young").checked) {
    location.href = "18-64-others.html";
  } else {
    location.href = "65-older.html";
  }
}
//demographics for others
function redirect7() {
  let positive = document.getElementById("yes");
  let negative = document.getElementById("no");

  if (document.getElementById("yes").checked) {
    location.href = "others-demo.html";
  } else {
    location.href = "others-demo.html";
  }
}
