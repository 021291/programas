$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue");
        $('p').fadeOut();
        $('p').delay(3000);
        $('p').fadeIn('slow');
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
    });
});