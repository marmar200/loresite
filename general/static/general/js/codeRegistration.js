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
    var temp;
    $(".password").on("change keyup paste", function () {
      temp = $(this).val()
      if ($(this).val().length >= 8) {
        $(".fail").css("display", "none");
        $(".icon-lock").addClass("next");
      } else {
        $(".fail").css("display", "flex");
        $(".fail").css("marginTop", 65);
        document.getElementById("fail").innerHTML = "Пароль слишком легкий!";
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
      if ($(this).val() == temp) {
        $(".fail").css("display", "none");
        $(".icon-confirm-lock").addClass("next");
      } else {
        $(".fail").css("display", "flex");
        $(".fail").css("marginTop", 65);
        document.getElementById("fail").innerHTML = "Пароли не совпадают!";
        $(".icon-confirm-lock").removeClass("next");
      }
    });

    $(".next-button").hover(function () {
      $(this).css("cursor", "pointer");
    });

    $(".next-button.confirm-password").click(function () {
      console.log("Something");
      $(".confirm-password-section").addClass("fold-up");
      $(".first-name-section").removeClass("folded");
    });

    $(".first-name").on("change keyup paste", function () {
      if ($(this).val()) {
        $(".icon-first-name").addClass("next");
      } else {
        $(".icon-first-name").removeClass("next");
      }
    });

    $(".next-button").hover(function () {
      $(this).css("cursor", "pointer");
    });

    $(".next-button.first-name").click(function () {
      console.log("Something");
      $(".first-name-section").addClass("fold-up");
      $(".second-name-section").removeClass("folded");
    });

    $(".second-name").on("change keyup paste", function () {
      if ($(this).val()) {
        $(".icon-second-name").addClass("next");
      } else {
        $(".icon-second-name").removeClass("next");
      }
    });

    $(".next-button").hover(function () {
      $(this).css("cursor", "pointer");
    });

    $(".next-button.second-name").click(function () {
      console.log("Something");
      $(".second-name-section").addClass("fold-up");
      $(".age-section").removeClass("folded");
    });

    $(".age").on("change keyup paste", function () {
      if ($(this).val()) {
        $(".icon-age").addClass("next");
      } else {
        $(".icon-age").removeClass("next");
      }
    });

    $(".next-button").hover(function () {
      $(this).css("cursor", "pointer");
    });

    $(".next-button.age").click(function () {
      console.log("Something");
      $(".age-section").addClass("fold-up");
      $(".success").css("marginTop", 0);
    });



