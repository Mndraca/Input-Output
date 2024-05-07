alert("this is a test");

//const fullName = document.getElementById("fullName").value;
//const email = document.getElementById("email").value;
const checkBox1 = document.getElementById("yes").checked;
const checkBox2 = document.getElementById("no").checked;
//const outPutArea = document.getElementById("outPut");
const button = document.getElementById("button");
const button1 = document.getElementById("button1");


function fullName (){
const fullName = document.getElementById("fullName").value;
document.getElementById("outPut").textContent = "Your name is: " + fullName;
};

function email (){
    const email = document.getElementById("email").value;
    document.getElementById("outPut").textContent = "Your email is: " + email;
    };