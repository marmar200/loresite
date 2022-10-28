$(".number").on("change keyup paste", function () {
    var str = $(this).val();
    var res = str[1] + str[3] + str[4] + str[5] + str[7] + str[8] + str[9] + str[11] + str[12] + str[14] + str[15];
    var flag = 1;
    for (var i = 0; i < 11; i++)
    {
         if (res[i] < '0' || res[i] > '9')
             flag = 0;
    }
    if (flag == 1 && res.length == 11) {
        $(".icon-paper-plane").addClass("next");
    } else {
        $(".icon-paper-plane").removeClass("next");
    }
});

$(".next-button").hover(function () {
    $(this).css("cursor", "pointer");
});

$(".next-button.number").click(function () {
    console.log("Something");
    $(".number-section").addClass("fold-up");
    $(".password-section").removeClass("folded");
});

$(".password").on("change keyup paste", function () {
    if ($(this).val()) {
        $(".icon-lock").addClass("next");
    } else {
        $(".icon-lock").removeClass("next");
    }
});

$(".next-button").hover(function () {
    $(this).css("cursor", "pointer");
});

$(".next-button.password").click(function () {
    console.log("Something");
    $(".password-section").addClass("fold-up");
    $(".confirm-password-section").removeClass("folded");
});

$(".confirm-password").on("change keyup paste", function () {
    if ($(this).val()) {
        $(".icon-confirm-lock").addClass("next");
    } else {
        $(".icon-confirm-lock").removeClass("next");
    }
});

$(".next-button").hover(function () {
    $(this).css("cursor", "pointer");
});

$(".next-button.confirm-password").click(function () {
    console.log("Something");
    $(".confirm-password-section").addClass("fold-up");
    $(".success").css("marginTop", 0);
});