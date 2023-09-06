var istatus = document.querySelector("h5");
var check = 0;

var btn = document.querySelector("#add");
btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "The beautiful girl and you are now friends.";
        istatus.style.color = "green";

        btn.innerHTML = "Remove Friend"

        check = 1;
    } else {
        istatus.innerHTML = "You removed your friend.";
        istatus.style.color = "red";

        btn.innerHTML = "Add Friend";

        check = 0;
    }
});

// var removeFriend = document.querySelector("#remove");
// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "You removed Ankita Nayak.";
//     istatus.style.color = "red";
// })