function addUser() {
   player1= document.getElementById("player1_name").value;
   player2= document.getElementById("player2_name").value;
   localStorage.setItem("Player1_name:",player1);
    localStorage.setItem("Player2_name:", player2);
    window.location="gamepage.html";
}