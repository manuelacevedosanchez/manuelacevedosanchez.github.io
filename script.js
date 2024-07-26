$(document).ready(function() {
    AOS.init({
        offset: 200,  // Reduce el offset si es necesario
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once: true,  // Asegúrate de que las animaciones solo se jueguen una vez
        mirror: false,
        disable: 'mobile'  // Opcional: deshabilita las animaciones en dispositivos móviles
    });

    $('.hover-image').hover(
        function() {
            $(this).attr('src', 'images/profile-hover.jpg');
        },
        function() {
            $(this).attr('src', 'images/profile.jpg');
        }
    );
});

function openLink(url) {
    window.open(url, '_blank');
}