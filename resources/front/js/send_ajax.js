$(document).ready(function() {
    $('#pingForm').validate({
        ignore: "#calc-form-image",
        rules: {
            email: "required",
            phone: "required",
        },
        errorElement: "span",
        messages: {
            email: "Пожалуйста введите ваш email или телефон",
            phone: "Пожалуйста введите ваш номер телефон",
        },
        submitHandler: function(form) {
            //var dataparam = $('#pingForm').serialize();
            var dataparam = new FormData(form);
            $.ajax({
                type: 'POST',
                url: '/public/send.php',
                enctype: 'multipart/form-data',
                //datatype: 'json',
                processData: false,
                contentType: false,
                cache: false,
                data: dataparam,
                beforeSend: function() {
                    $('#contact_result').html('<div class="contact_result"><p>Отправляю...</p></div>');
                },
                success: function(data) {
                    if (data == 'success') {
                        $('#contact_result').text('<div class="contact_result"><p>Ваше сообщение отправлено</p></div>');
                    } else {
                        $('.no-config').show();
                        $('#pingForm').find('input', '#contact_text').val('');
                        $('#contact_result').html('<div class="contact_result"><p>Ваше сообщение отправлено</p></div>');
                    }

                },
                complete: function(jqXHR, textStatus) {}

            });
        }
    });

});