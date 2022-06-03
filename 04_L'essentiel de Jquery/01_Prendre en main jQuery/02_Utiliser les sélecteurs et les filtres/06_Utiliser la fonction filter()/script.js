$(document).ready(function(){
    let allLinks = $(':not(.link)');
    $('p').filter(allLinks).css({fontFamily:'Verdana',color:'red'});
});

