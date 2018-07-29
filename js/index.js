var i = 0;
var id = 'title-span';
var txt = "Hi!I'M THU VO"; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */
$('#title-span').html("");
$('#work-position').html("");
function typeWriter() {
    /*Perform typewriter for tilte*/
    if (i < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    /*Perform typewirter for work-position*/
    else {
        if (id != 'work-position') {
            $('#title-span').css('border', '0px');
            $('#work-position').css('border-right', '2px solid #fff');
            $('#work-position').css('animation', 'blink-caret .75s step-end infinite')
            id = 'work-position';
            txt = "JAVA DEVERLOPER";
            i = 0;
            setTimeout(typeWriter, speed);
        }
    }
}

// Set amination scroll bar for link target by id
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 45
    }, 500);
});
$(document).ready(function(){
    
    //Execute typewriter script.
    typeWriter();

    //Set onclick for navbar link//Set onclick for navbar link
    $(".nav-link").on("click",function(){
        if( !$(this).hasClass('non-active'))
        {
            $('.active').removeClass('active');
            $(this).parent().addClass("active");
        } 
        else{
            $(this).attr('target', '_blank');
        }
    });
});