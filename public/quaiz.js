function start(){
    document.getElementById('main').style.display = "block"
    document.getElementById('start').style.display = "none" 
    second = 240;
    function time(){
        document.getElementById("demo").innerHTML = second--
    }
    setInterval(time , 1000);
    
}


var test = localStorage.getItem("Quizz");
test = JSON.parse(test)

var count = 0;
var marks = 0;

   var divQ = document.getElementById('ques');
   var Q = document.createElement('h3');
   divQ.appendChild(Q);
   Q.setAttribute('id', "question");
   var txtNode = document.createTextNode(test[count].question)
   Q.appendChild(txtNode)

   var a1 = document.createElement('input');
   a1.setAttribute('type', "radio");
   a1.setAttribute("name", "q");
   a1.setAttribute('value',  test[count].option1 )
   a1.setAttribute("id","op1");
   divQ.appendChild(a1);
   var span1 = document.createElement('span');
   span1.setAttribute("id", "option1");
   var answertxtNode1 = document.createTextNode(test[count].option1);
   span1.appendChild(answertxtNode1);
   divQ.appendChild(span1);
   var br1 = document.createElement('br')
   divQ.appendChild(br1)
   
   var a2 = document.createElement('input');
   a2.setAttribute('type', "radio");
   a2.setAttribute("name", "q");
   a2.setAttribute('value',  test[count].option2)
   a2.setAttribute("id","op2")
   divQ.appendChild(a2);
   var span2 = document.createElement('span');
   span2.setAttribute("id", "option2");
   var answertxtNode2 = document.createTextNode(test[count].option2);
   span2.appendChild(answertxtNode2);
   divQ.appendChild(span2)
   var br2 = document.createElement('br')
   divQ.appendChild(br2)

   var a3 = document.createElement('input');
   a3.setAttribute('type', "radio");
   a3.setAttribute("name", "q");
   a3.setAttribute('value',  test[count].option3 )
   a3.setAttribute("id","op3")
   divQ.appendChild(a3)
   var span3 = document.createElement('span');
   span3.setAttribute("id", "option3");
   var answertxtNode3 = document.createTextNode(test[count].option3);
   span3.appendChild(answertxtNode3);
   divQ.appendChild(span3);
   var br2 = document.createElement('br')
   divQ.appendChild(br2)

   var a4 = document.createElement('input');
   a4.setAttribute('type', "radio");
   a4.setAttribute("name", "q");
   a4.setAttribute('value',  test[count].option4 )
   a4.setAttribute("id","op4")
   divQ.appendChild(a4)
   var span4 = document.createElement('span');
   span4.setAttribute("id", "option4");
   var answertxtNode4 = document.createTextNode(test[count].option4);
   span4.appendChild(answertxtNode4);
   divQ.appendChild(span4);


   function change() {
        var radio = document.querySelector("input[type= radio]:checked");
        console.log(radio.value)
        radio.checked = false
        
        var ans = false
        if(radio.value === test[count].answer){

             ans = true
             marks++
         }
         if(ans === false){
         }
         

         if(count <  test.length -1){
              count++;  
         document.getElementById("question").innerHTML = test[count].question;

         document.getElementById("option1").innerHTML = test[count].option1;

         document.getElementById("op1").value = test[count].option1;

         document.getElementById("option2").innerHTML = test[count].option2;

         document.getElementById("op2").value = test[count].option2;
         
         document.getElementById("option3").innerHTML = test[count].option3;
         
         document.getElementById("op3").value = test[count].option3;

         document.getElementById("option4").innerHTML = test[count].option4;
         
         document.getElementById("op4").value = test[count].option4;

         console.log(marks)
         // document.getElementById('mark').innerHTML =  marks * 10;

        }

        else{
         var mark = marks * 10
                   document.getElementById('main').style.display = "none", document.getElementById("mark").style.display = "block"; 
                   if(mark < 50){
                    document.getElementById('mark').innerHTML = "Your are Fail " + mark + " Marks"
               }
               else{    
                    document.getElementById('mark').innerHTML = "Congrats you are pass " + mark + " Marks";
               } 
    }
}
    setTimeout(function(){  
         var mark = marks * 10
                   document.getElementById('main').style.display = "none", document.getElementById("mark").style.display = "block"; 
                   if(mark < 50){
                    document.getElementById('mark').innerHTML = "Your are Fail " + mark + " Marks"
               }
               else{    
                    document.getElementById('mark').innerHTML = "Congrats you are pass " + mark + " Marks";
               }   
               }, 240000);
          


         function checkQ(){
              var radio = document.querySelector("input[type= radio]:checked")
              console.log(radio.value)
              ans = false
              if(radio.value === test[count].answer){
                   alert('Right')
              ans = true
              }
              else{
              alert('Wrong')
              }
         }        