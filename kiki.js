document.getElementById("register").addEventListener("submit", function(event){
event.preventDefault()

let password = document.getElementById("password").value
let password_true = document.getElementById("password_true").value

if(password !== password_true){
    alert("не круто")
    return
}

alert("Всё круто")
document.getElementById("success").style.display = "block";
this.reset()

})