$(function () {
    $('#carousel').carousel({
        interval: 5000,
        keyboard: false,
        pause: 'hover',
        ride: 'carousel',
        wrap: false
    });
});

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
