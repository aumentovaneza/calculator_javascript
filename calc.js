/* jshint browser: true */
window.onload = function () {
    'use strict';

    var outputScreen,
        output,
        limit,
        zero,
        period,
        operator;
    //display output on div
    outputScreen = document.getElementById("display_area");

    var elem = document.querySelectorAll(".number");

    var len = elem.length;

    for (var i = 0; i < len; i++ ) {

        elem[i].addEventListener("click",function() {

            var num = this.value;

            output = outputScreen.innerHTML +=num;

            limit = output.length;



        },false);

    }
    //display zero on the display or add to the expression
    document.querySelector(".zero").addEventListener("click",function() {

      var zero = this.value;

        if(outputScreen.innerHTML === "") {

            output = outputScreen.innerHTML = zero;
        }

        else if(outputScreen.innerHTML === output) {

            output = outputScreen.innerHTML +=zero;

        }

    },false);
    //display period on the display or add to the expression
    document.querySelector(".period").addEventListener("click",function() {

       var period = this.value;

        if(screen.innerHTML === "") {

            output = outputScreen.innerHTML = screen.innerHTML.concat("0.");

        }

        else if(outputScreen.innerHTML === output) {

            outputScreen.innerHTML = outputScreen.innerHTML.concat(".");

        }

    },false);

    //evaluate expression

  document.getElementById("evaluate").addEventListener("click",function() {

        if(outputScreen.innerHTML === output) {

            outputScreen.innerHTML = eval(output);
        }

        else {
            outputScreen.innerHTML = "";
        }

    },false);

    document.getElementById("clear_button").addEventListener("click",function() {

        outputScreen.innerHTML = "";

    },false);


    var elem1 = document.querySelectorAll(".operator");

    var len1 = elem1.length;

    for(var i = 0; i < len1; i++ ) {

        elem1[i].addEventListener("click",function() {

            operator = this.value;

            if(outputScreen.innerHTML === "") {

                outputScreen.innerHTML = outputScreen.innerHTML.concat("");

            }

            else if(output) {

                outputScreen.innerHTML = output.concat(operator);

            }

        },false);

    }
};
