function check(){
    let score = 0 ;
    let q1 = document.quiz.question1.value ;
    let q2 = document.quiz.question2.value ;
    let q3 = document.quiz.question3.value ;
    let q4 = document.quiz.question4.value ;
    let q5 = document.quiz.question5.value ;
    if(q1=="Hypertext Markup Language"){
    score++;
    }
    if(q2=="toLowerCase()"){
    score++ ;
    }
    if(q3=="anchor()"){
    score++ ;
    }
    if(q4=="toSource()"){
    score++ ;
    }
    if(q5=="Script"){
    score++ ;
    }
    
    if(score >= 4 ){
   alert("Marks " + " " + score + " " + "Out Of 5" + "     " + "Final Call : Yes");
    }
    if(score == 3 ){
    alert("Marks " + " " + score + " " + "Out Of 5" + "     "+"Final Call : Maybe");
    } 
    else{
    alert("Marks " + " " + score + " " + "Out Of 5" +"     "+" Final Call : No");
        
    }
    }
