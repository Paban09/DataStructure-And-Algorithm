var letters =[];
var word="racecar";
var rword="";

//put lettrs of word into a stack
for (var i=0;i<word.length;i++){
    letters.push(word[i]);
}

//pop of the stack reverse word
for(var i=0;i<word.length;i++){
    rword+=letters.pop();
}

if(rword==word){
    console.log(word+ " is a plindrome");
}else{
    console.log(word+ " is a not plindrome");
}