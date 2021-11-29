var autoincrement = 1000;
var userdetails;
var user = /** @class */ (function () {
    function user(Username, Age, PhoneNo) {
        autoincrement++;
        this.username = Username;
        this.age = Age;
        this.phoneNo = PhoneNo;
        this.userId = autoincrement.toString();
    }
    return user;
}());
var course = /** @class */ (function () {
    function course(CourseId, CourseName) {
        this.courseId = CourseId;
        this.courseName = CourseName;
    }
    return course;
}());
var Userinfo = new Array();
Userinfo.push(new user("Nithish", 21, 9840866564));
Userinfo.push(new user("Sanjay", 20, 8778751396));
function newUser() {
    document.getElementById("user").style.display = "none";
    document.getElementById("userdetails").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("course").style.display = "none";
    document.getElementById("display").style.display = "none";
}
function userDetails() {
    document.getElementById("user").style.display = "block";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("course").style.display = "none";
    document.getElementById("display").style.display = "none";
    var UserName = document.getElementById("uname").value;
    var Age = document.getElementById("uage").value;
    var PhoneNo = document.getElementById("uph").value;
    if (UserName != "" && Age != "" && PhoneNo != "") {
        autoincrement;
    }
    else {
        alert("please fill the form!!!!");
    }
}
function UserId() {
    document.getElementById("user").style.display = "none";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("option").style.display = "none";
    document.getElementById("course").style.display = "none";
    document.getElementById("display").style.display = "none";
}
function selectOption() {
    document.getElementById("user").style.display = "none";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "block";
    document.getElementById("course").style.display = "none";
    document.getElementById("display").style.display = "none";
}
function courseOption() {
    document.getElementById("user").style.display = "none";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("course").style.display = "block";
    document.getElementById("display").style.display = "none";
}
function display() {
    document.getElementById("user").style.display = "none";
    document.getElementById("userdetails").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("course").style.display = "none";
    document.getElementById("display").style.display = "block";
}
