// function login(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//      if(email === "ishaquerahimoon123456789@gamil.com" && password === "123456"){
//           document.getElementById("panel").style.display = "block";
//           document.getElementById("log").style.display = "none";
//      }
//      else{
//          alert('Please Emter Correct Email Address')
//      }
// }

function quiz1(){
    window.location.href = "quaiz.html"
}




var all_array = [];
function addNew(){
    var question = document.getElementById("question").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var answer = document.getElementById("answer").value;
    
    function MyFunc(question,option1,option2,option3,option4,answer){
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.answer = answer;
        
        
    }
    
   var x = new MyFunc(question,option1,option2,option3,option4,answer)
   all_array.push(x);


}

function btn1(){
    all_array = JSON.stringify(all_array);
    localStorage.setItem("Quizz",all_array);
}







































// var dataArry =[];
// function next(){
//     var quastion = document.getElementById("quastion");
//     var opt1 = document.getElementById("option1");
//     var opt2 = document.getElementById("option2");
//     var opt3 = document.getElementById("option3");
//     var opt4 = document.getElementById("option4");
//     var answer = document.getElementById("answer");
// function Quiz(quastion,opt1,opt2,opt3,opt4,answer){
//     this.que = quastion;
//     this.op1 = opt1;
//     this.op2 = opt2;
//     this.op3 = opt3;
//     this.op4 = opt4;
//     this.ans = answer;

// }

// var allquestion = new Quiz(quastion,opt1,opt2,opt3,opt4,answer);
// dataArry.push(allquestion);
// console.log(dataArry);


// }
// function send(){
//     dataArry = JSON.stringify(dataArry);
//     localStorage.setItem("Quizz",dataArry);   
// }