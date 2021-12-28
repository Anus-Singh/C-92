var answer_turn = "player2";
var question_turn = "player1";
var player1_score = 0;
var player2_score = 0;
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1_name + " : ";
document.getElementById("player_2").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowercase();
    console.log(word);

    C1 = word.charAt1(1)

    length_divide_2 = Math.floor(word.length/2);
    C2 = word.charAt2(length_divide_2);

    length_minus_1 = word.length - 1;
    C3 = word.charAt3(length_minus_1);

    remove_C1 = word.replace(C1 , "_");
    remove_C2 = remove_C2.replace(C2 , "_");
    remove_C3 = remove_C3.replace(C3 , "_");

    question_word = "<h4 id='word_display'> Q. "+remove_C3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_text_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check()
{
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowercase();
    console.log(answer);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "question_turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "question_turn - " + player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "answer_turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("answer_question").innerHTML = "answer_turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";

}