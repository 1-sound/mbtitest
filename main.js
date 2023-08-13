var num = 1;

var q = {
    1: { "title": "문제 1번 (E & I)", "type": "EI", "A": "E 답변", "B": "I 답변" },
    2: { "title": "문제 2번 (E & I)", "type": "EI", "A": "E 답변", "B": "I 답변" },
    3: { "title": "문제 3번 (E & I)", "type": "EI", "A": "E 답변", "B": "I 답변" },
    4: { "title": "문제 4번 (S & N)", "type": "SN", "A": "S 답변", "B": "N 답변" },
    5: { "title": "문제 5번 (S & N)", "type": "SN", "A": "S 답변", "B": "N 답변" },
    6: { "title": "문제 6번 (S & N)", "type": "SN", "A": "S 답변", "B": "N 답변" },
    7: { "title": "문제 7번 (T & F)", "type": "TF", "A": "T 답변", "B": "F 답변" },
    8: { "title": "문제 8번 (T & F)", "type": "TF", "A": "T 답변", "B": "F 답변" },
    9: { "title": "문제 9번 (T & F)", "type": "TF", "A": "T 답변", "B": "F 답변" },
    10: { "title": "문제 10번 (J & P)", "type": "JP", "A": "J 답변", "B": "P 답변" },
    11: { "title": "문제 11번 (J & P)", "type": "JP", "A": "J 답변", "B": "P 답변" },
    12: { "title": "문제 12번 (J & P)", "type": "JP", "A": "J 답변", "B": "P 답변" }
}

var result = {
    "ENFJ": { "animal": "ENFJ 동물", "explain": "ENFJ 동물 설명", "img": "animal.jpeg" },
    "ENFP": { "animal": "ENFP 동물", "explain": "ENFP 동물 설명", "img": "animal.jpeg" },
    "ENTJ": { "animal": "ENTJ 동물", "explain": "ENTJ 동물 설명", "img": "animal.jpeg" },
    "ENTP": { "animal": "ENTP 동물", "explain": "ENTP 동물 설명", "img": "animal.jpeg" },
    "ESFJ": { "animal": "ESFJ 동물", "explain": "ESFJ 동물 설명", "img": "animal.jpeg" },
    "ESFP": { "animal": "ESFP 동물", "explain": "ESFP 동물 설명", "img": "animal.jpeg" },
    "ESTJ": { "animal": "ESTJ 동물", "explain": "ESTJ 동물 설명", "img": "animal.jpeg" },
    "ESTP": { "animal": "ESTP 동물", "explain": "ESTP 동물 설명", "img": "animal.jpeg" },
    "INFJ": { "animal": "INFJ 동물", "explain": "INFJ 동물 설명", "img": "animal.jpeg" },
    "INFP": { "animal": "INFP 동물", "explain": "INFP 동물 설명", "img": "animal.jpeg" },
    "INTJ": { "animal": "INTJ 동물", "explain": "INTJ 동물 설명", "img": "animal.jpeg" },
    "INTP": { "animal": "INTP 동물", "explain": "INTP 동물 설명", "img": "animal.jpeg" },
    "ISFJ": { "animal": "ISFJ 동물", "explain": "ISFJ 동물 설명", "img": "animal.jpeg" },
    "ISFP": { "animal": "ISFP 동물", "explain": "ISFP 동물 설명", "img": "animal.jpeg" },
    "ISTJ": { "animal": "ISTJ 동물", "explain": "ISTJ 동물 설명", "img": "animal.jpeg" },
    "ISTP": { "animal": "ISTP 동물", "explain": "ISTP 동물 설명", "img": "animal.jpeg" }
}

function start() {
    $(".start").hide();
    $(".question").show();
    next();
}

$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1)
    next();
});

$("#B").click(function () {
    next();
});

function next() {
    if (num == 13) {
        $(".question").hide();
        $(".result").show();
        var mbti = "";
        ($('#EI').val() < 2) ? mbti += "I" : mbti += "E";
        ($('#SN').val() < 2) ? mbti += "N" : mbti += "S";
        ($('#TF').val() < 2) ? mbti += "F" : mbti += "T";
        ($('#JP').val() < 2) ? mbti += "P" : mbti += "J";
        alert(mbti);
        $("#img").attr("src", result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
    }
    else {
        $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
    shuffleButtons();
}

function shuffleButtons() {
    var buttonA = document.getElementById("A");
    var buttonB = document.getElementById("B");
    var parentElement = buttonA.parentNode;
    var buttons = [buttonA, buttonB];

    for (var i = buttons.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = buttons[i];
        buttons[i] = buttons[j];
        buttons[j] = temp;
    }

    for (var i = 0; i < buttons.length; i++) {
        parentElement.appendChild(buttons[i]);
    }
}