// 1. English Section:
$(".english-button").click(function() {
    let englishInput = $(".english").val();
    if (englishInput === "Mon") {

        // display this text if the answer is correct
        $(".english-message").text("Correct!");
    } else {
        // display this text if the answer is incorrect
        $(".english-message").text("Wrong! Try again.");
    }
});


// 2. Social Studies section
$(".ss-button").click(function() {
    let ssInput = $(".social-studies").val();
    if (ssInput === "Albany") {
        $(".ss-message").text("Correct!");
    } else {
        $(".ss-message").text("Wrong! Go back to first grade.");
    }
});


// 3. Math section
$(".math-button").click(function() {
    let mathInput = Number($(".math").val());
    if (mathInput === 30) {
        $(".math-message").text("Correct!");
    } else {
        $(".math-message").text("Wrong!You stink.");
    }
});


// 4. Science section
$(".science-button").click(function() {
    let scienceInput = $(".science").val();
    if (scienceInput === "solid") {
        $(".science-message").text("Correct!You are amazing!");
    } else {
        $(".science-message").text("Wrong!You stink.");
    }

});