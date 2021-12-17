$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){


     new WOW().init();


     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

     
    //animated header class
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});

    /*$('#countdown_dashboard').countDown({
        targetDate: {
            'day':      30,
            'month':    12,
            'year':     2018,
            'hour':     23,
            'min':      59,
            'sec':      59,
        },
        omitWeeks: true
    });
    */

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
    $(".about-slider").owlCarousel(
        {
        singleItem: true,
        pagination : true,
        autoPlay : 5000,
        }
    );

    /*$('input, textarea').data('holder', $('input, textarea').attr('placeholder'));

    $('input, textarea').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });*/


    //contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter Your Name",
                minlength: "Your name must consist of at least 2 characters"
            },
            message: {
                required: "Please Write Something",
                minlength: "Your message must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail.php",
               
            });
        }
    });

});







function calculate() {
            var status;
            var result_height;
            var first_number = parseFloat(document.getElementById("Text1").value);
            var second_number = parseFloat(document.getElementById("Text2").value);
            var result_height = first_number * 2;
            var result = second_number / result_height;

            if (result <= 18.9)
            {
                status = "Underweight";
                document.getElementById("result").value = status;
                document.getElementById("result").style.backgroundColor='#64c5cc';
                document.getElementById("Text1").disabled = true;
                document.getElementById("Text2").disabled = true;
                setTimeout(function(){
                document.getElementById("Text1").disabled = false;
                document.getElementById("Text2").disabled = false;
                document.getElementById("Text1").value = '';
                document.getElementById("Text2").value = '';
                document.getElementById("result").value = '';   
                document.getElementById('result').style.backgroundColor = "";
            }, 5000);

            }
            else if(result >= 19 && result <= 24.9)
            {
                status = "Normal"
               document.getElementById("result").value = status;
                document.getElementById("result").style.backgroundColor='#8ac340';
                document.getElementById("Text1").disabled = true;
                document.getElementById("Text2").disabled = true;
                setTimeout(function(){
                document.getElementById("Text1").disabled = false;
                document.getElementById("Text2").disabled = false;
                document.getElementById("Text1").value = '';
                document.getElementById("Text2").value = '';
                document.getElementById("result").value = '';   
                document.getElementById('result').style.backgroundColor = "";
            }, 5000);
            }
            else if(result >= 25 && result <= 29.9)
            {
                status = "Overweight"
                document.getElementById("result").value = status;
                document.getElementById("result").style.backgroundColor='#f8ad3a';
                document.getElementById("Text1").disabled = true;
                document.getElementById("Text2").disabled = true;
                setTimeout(function(){
                document.getElementById("Text1").disabled = false;
                document.getElementById("Text2").disabled = false;
                document.getElementById("Text1").value = '';
                document.getElementById("Text2").value = '';
                document.getElementById("result").value = '';   
                document.getElementById('result').style.backgroundColor = "";
            }, 5000);
            }
            else if(result >= 30 && result <= 35.9)
            {
                status = "Obese"
                document.getElementById("result").value = status;
                document.getElementById("result").style.backgroundColor='#ed5a24';
                document.getElementById("Text1").disabled = true;
                document.getElementById("Text2").disabled = true;
                setTimeout(function(){
                document.getElementById("Text1").disabled = false;
                document.getElementById("Text2").disabled = false;
                document.getElementById("Text1").value = '';
                document.getElementById("Text2").value = '';
                document.getElementById("result").value = '';   
                document.getElementById('result').style.backgroundColor = "";
            }, 5000);
            }
            else
            {
                status = "Extremely Obese"
                document.getElementById("result").value = status;
                document.getElementById("result").style.backgroundColor='#d85038';
                document.getElementById("Text1").disabled = true;
                document.getElementById("Text2").disabled = true;

                setTimeout(function(){
                document.getElementById("Text1").disabled = false;
                document.getElementById("Text2").disabled = false;
                document.getElementById("Text1").value = '';
                document.getElementById("Text2").value = '';
                document.getElementById("result").value = '';   
                document.getElementById('result').style.backgroundColor = "";
            }, 5000);
            }
           
        }
