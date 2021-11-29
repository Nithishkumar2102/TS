let autoincrement=1000;
let userdetails;
class user
{
    username:string;
    userId:string;
    age:number;
    phoneNo:number;
    userid:number;
    constructor(Username:string,Age:number,PhoneNo:number)
    {
        autoincrement++;
        this.username=Username;
        this.age=Age;
        this.phoneNo=PhoneNo;
        this.userId=autoincrement.toString();
    }

}
class course
{
    courseId:number;
    courseName:string;
    constructor(CourseId:number,CourseName:string)
    {
        this.courseId=CourseId;
        this.courseName=CourseName;
    }
}
let Userinfo: Array<user> = new Array<user>();
Userinfo.push(new user("Nithish",21,9840866564));
Userinfo.push(new user("Sanjay",20,8778751396));
function newUser()
{
    (document.getElementById("user") as HTMLDivElement).style.display="none";
    (document.getElementById("userdetails") as HTMLDivElement).style.display="block";
    (document.getElementById("login") as HTMLDivElement).style.display="none";
    (document.getElementById("option") as HTMLDivElement).style.display="none";
    (document.getElementById("course") as HTMLDivElement).style.display="none";
    (document.getElementById("display") as HTMLDivElement).style.display="none";

}
function userDetails()
{
    
    (document.getElementById("user") as HTMLDivElement).style.display="block";
    (document.getElementById("userdetails") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display="none";
    (document.getElementById("option") as HTMLDivElement).style.display="none";
    (document.getElementById("course") as HTMLDivElement).style.display="none";
    (document.getElementById("display") as HTMLDivElement).style.display="none";
    let UserName=(document.getElementById("uname") as HTMLInputElement).value;
    let Age=(document.getElementById("uage") as HTMLInputElement).value;
    let PhoneNo=(document.getElementById("uph") as HTMLInputElement).value;
    if(UserName!="" && Age!="" && PhoneNo!="")
    {
        autoincrement;

    }
    else{
        alert("please fill the form!!!!");
        
    }
}
function UserId()
{
    (document.getElementById("user") as HTMLDivElement).style.display="none";
    (document.getElementById("userdetails") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display="block";
    (document.getElementById("option") as HTMLDivElement).style.display="none";
    (document.getElementById("course") as HTMLDivElement).style.display="none";
    (document.getElementById("display") as HTMLDivElement).style.display="none";


}
function selectOption()
{
    (document.getElementById("user") as HTMLDivElement).style.display="none";
    (document.getElementById("userdetails") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display="none";
    (document.getElementById("option") as HTMLDivElement).style.display="block";
    (document.getElementById("course") as HTMLDivElement).style.display="none";
    (document.getElementById("display") as HTMLDivElement).style.display="none";
}
function courseOption()
{(document.getElementById("user") as HTMLDivElement).style.display="none";
(document.getElementById("userdetails") as HTMLDivElement).style.display="none";
(document.getElementById("login") as HTMLDivElement).style.display="none";
(document.getElementById("option") as HTMLDivElement).style.display="none";
(document.getElementById("course") as HTMLDivElement).style.display="block";
(document.getElementById("display") as HTMLDivElement).style.display="none";
}
function display()
{
    (document.getElementById("user") as HTMLDivElement).style.display="none";
    (document.getElementById("userdetails") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display="none";
    (document.getElementById("option") as HTMLDivElement).style.display="none";
    (document.getElementById("course") as HTMLDivElement).style.display="none";
    (document.getElementById("display") as HTMLDivElement).style.display="block";
}