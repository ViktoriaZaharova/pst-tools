$('[name="phone"]').mask('+7(999) 999-99-99');

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});


$(document).ready(function () {
    if ($('#wpadminbar')[0]) { // fix admin bar
        $('header').css('margin-top', '32px')
    }
});


function sendAjax(data, success, error, complete) {
    $.ajax({
        type: "POST",
        url: '/wp-admin/admin-ajax.php',
        data: data,
        dataType: 'json',
        success: success,
        error: error,
        complete: complete
    });
}


function showModal(title, text) { // показ успеха
    $('#custom_modal .modal-title').html(title); // установим заголовок окна
    $('#custom_modal .modal-body').html(text); // установим text окна

    $('.modal').modal('hide');
    $('#custom_modal').modal('toggle');
}


$('.form, .form-course').submit(function (e) { // Отправка формы
    e.preventDefault();
    var form_data = $(this).serialize(); // отправляемая информация
    var form = $(this); // сама форма
    var but = form.find('button[type="submit"]'); // кнопка отправки
    but.prop('disabled', true); // отключим кнопку
    sendAjax(form_data, function (data) {
        if (data.status) {
            showModal('Заявка успешно отправлена', 'Спасибо, в ближайшее время свяжемся с Вами');
            form[0].reset();
        } else {
            alert(data.text);
        }
    }, function () {
        alert('Ошибка, попробуйте еще раз');
    }, function () {
        but.prop('disabled', false);
    });
});

$(document).on('click', 'a[data-target="#callModal"]', function () {
    var form_name = $(this).data('form_name');
    $('#callModal input[name="form_name"]').val(form_name);
});

$('.product-gallery-max').slick({
    slidesToShow: 1,
    fade: true,
    asNavFor: '.product-gallery-preview',
    arrows: false
});

$('.product-gallery-preview').slick({
    slidesToShow: 4,
    asNavFor: '.product-gallery-max',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
            }
        },


    ]
});

if (window.location.pathname != '/') {
    $('header').addClass('header');
    $('header .btn-accent').removeClass('btn-accent').addClass('btn-white');
}

new WOW().init();