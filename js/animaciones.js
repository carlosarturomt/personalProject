$(window).scroll(function() {
    $('#SL1').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 200) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL2').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 250) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL3').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL4').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 350) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL5').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL6').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 450) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL7').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL8').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL9').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("slideLeft");
        }
    });
});
$(window).scroll(function() {
    $('#SL10').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("slideLeft");
        }
    });
});

// slideRight
$(window).scroll(function() {
    $('#SR1').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 200) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR2').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 250) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR3').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR4').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 350) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR5').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR6').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 450) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR7').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR8').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR9').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR10').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#SR11').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("slideRight");
        }
    });
});
$(window).scroll(function() {
    $('#exUp').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass("expandUp");
        }
    });
});


// Mostrar CANVA
function mostrar() {
    var intro = document.getElementById('none');
    intro.style.display = 'none';
    document.getElementById("mostrarOcultar").style.visibility = "inherit";
}

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

var altura = screen.height;
var ancho = screen.width;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// The x and y offset of the canvas from the edge of the page
const rect = myPics.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'purple';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}