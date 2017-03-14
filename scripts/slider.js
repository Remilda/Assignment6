function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}
$(document).ready(function() {
    updateSliderValue($('#strengthLevel').val());

    $('#strengthLevel').change(function() {
        updateSliderValue($(this).val());
    });
});

function updateSliderValue(newValue) {
    $('#rangeValue1').val(newValue);
    $('.wrapped .value').html(newValue);

    if (newValue < 32) {
        $('.wrapped .value').removeClass('red').removeClass('yellow').addClass('green');
    } else if (newValue > 33 && newValue < 66) {
        $('.wrapped .value').removeClass('green').removeClass('red').addClass('yellow');
    } else if (newValue > 67 && newValue < 101) {
        $('.wrapped .value').removeClass('yellow').removeClass('green').addClass('red');
    }
}

function showOptions() {
    $('.test .test2').removeClass('hide');
}

function validateForm() {
    var a = document.forms["coffee-order"]["emailAddress"].value;
    var b = document.forms["coffee-order"]["size"].value;
    var c = document.forms["coffee-order"]["strengthLevel"].value;
    if (a != "" && b == "coffee-zilla" && c >= 66) {
        $('#myModal').modal('show');

    }
}
