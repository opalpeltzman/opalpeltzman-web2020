function calculate(){
    var fullName = prompt("plaese enter yout full name", "Opal Peltzman");
    var firstName = fullName.split(' ')[0];
    var lastName = fullName.substring(firstName.length).trim();
    var sum = firstName.length * lastName.length;
    console.log(firstName);
    console.log(lastName);
    console.log(sum);
    return sum;
}


var article = "";
var numOfArticles = calculate();
for(var i = 0; i < numOfArticles; i++){
    article += "<article></article>"
}
var main = document.getElementById("lay2Main");
main.innerHTML = article;

