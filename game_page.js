function label_update(){
    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0;
    player2_score = 0;

    document.getElementById("player1_name_label").innerHTML = player1_name + " : ";
    document.getElementById("player2_name_label").innerHTML = player2_name + " : ";

    document.getElementById("player1_score_label").innerHTML = player1_score;
    document.getElementById("player2_score_label").innerHTML = player2_score;

    document.getElementById("question_turn_label").innerHTML = "Question Turn : " + player1_name;
    document.getElementById("answer_turn_label").innerHTML = "Answer Turn : " + player2_name;
}



function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input id='answer' type='number'> <br> <br>";
    check_button = "<button id='check_button' type='button' class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    number1 = document.getElementById("number1").value = "";
    number2 = document.getElementById("number2").value = "";


}

Question_Turn = "Player1"
Answer_Turn = "Player2"

function check(){
    player_answer = document.getElementById("answer").value;
    if (actual_answer == player_answer){
        if(Answer_Turn == "Player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score_label").innerHTML = player1_score;
            Question_Turn = "Player1";
            Answer_Turn = "Player2";
            document.getElementById("question_turn_label").innerHTML = "Question Turn : " + player1_name;
            document.getElementById("answer_turn_label").innerHTML = "Answer Turn : " + player2_name;

        }

        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score_label").innerHTML = player2_score;
            Question_Turn = "Player2";
            Answer_Turn = "Player1";
            document.getElementById("question_turn_label").innerHTML = "Question Turn : " + player2_name;
            document.getElementById("answer_turn_label").innerHTML = "Answer Turn : " + player1_name;

        }
    } 
    
    document.getElementById("output").innerHTML = "";
}