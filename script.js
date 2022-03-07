/*$(function() {
    var links = $('a.link').click(function() {
        links.removeClass('active');
        $(this).addClass('active');
    });
 });
*/

 $(document).ready(function(){
    $('a').click(function(){
        $('a').css('color', 'black');
        $(this).css('color', 'blue');
    });
});