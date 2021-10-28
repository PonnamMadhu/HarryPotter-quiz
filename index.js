console.log("hello! Iam MAdhu")
var read=require("readline_sync")
var username=read.question("what is your name? ")
console.log("welcome to Hogwarts !!"+username)
console.log("please use lower case while answering and no numbers")
console.log("----------------")
var score=0
var qlist=[
     {q:"what is HarryPotter birthday month? ",
     a:"july"  },
     {
         q:"which house did snape belong to? ",
         a:"slytherin"
     },
     {
         q:"what is Harrypotter owl's name ?  ",
         a:"hedwig"
     },
     {
         q:"what is the term used in wizarding world for non-magic people? ",
         a:"muggle"
     },
     {
         q:"what is voldrmort real name? ",
         a:"tom riddle"
     }
     {
         q:"whom did harry marry? ",
         a:"ginnyweaslay"
     }
]
var l=qlist.length
function play(q,a){
    var answer=read.question(q)
    if(answer===a){
        console.log("you are right")
        score+=1
    }
    else{
        console.log("you are wrong")
    }
    console.log("your final score is"+score)
}
for(var i=0;i<l;i++){
    var cquestion=qlist[i]
    play(cquestion.q,cquestion.a)
}
if(score===l){
    console.log("you entered evrything right.you HarryPotter well")
}
else{
    console.log("you should know  better")
}