

$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
        $('hr3').addClass('small'); $('hr4').addClass('small'); $('hr2').addClass('small');$('#line').addClass('small');$('#logo').addClass('small');
		$('.flex-container-red').addClass('small');$('p').addClass('small');
    } else {
        $('hr3').removeClass('small'); $('hr4').removeClass('small'); $('hr2').removeClass('small'); $('#line').removeClass('small'); $('#logo').removeClass('small');$('.flex-container-red').removeClass('small');$('p').removeClass('small'); 
    }
});





document.addEventListener( "DOMContentLoaded", function() {
  // it's a div, that holds your news
  // it holds ul with news in li elements
  var div = document.getElementById( "container" );
  div.addEventListener( "scroll", function() {
    var max_scroll = this.scrollHeight - this.clientHeight;
    var current_scroll = this.scrollTop;
    var bottom = 100;
    if ( current_scroll + bottom >= max_scroll ) {
      var ul = document.getElementsByTagName( "ul" )[ 0 ];
      var current = parseInt( ul.dataset.current, 10 );
      var li = document.getElementsByTagName( "li" )[ current ];
      var new_li = li.cloneNode( true );
      ul.appendChild( new_li );
      ul.dataset.current = current + 1;
    }
  } );
} );



document.addEventListener( "DOMContentLoaded", function() {
  // it's a div, that holds your news
  // it holds ul with news in li elements
  var div = document.getElementById( "containerx" );
  div.addEventListener( "scroll", function() {
    var max_scroll = this.scrollHeight - this.clientHeight;
    var current_scroll = this.scrollTop;
    var bottom = 100;
    if ( current_scroll + bottom >= max_scroll ) {
      var ul1 = document.getElementsByTagName( "ul1" )[ 0 ];
      var current = parseInt( ul1.dataset.current, 10 );
      var li1 = document.getElementsByTagName( "li1" )[ current ];
      var new_li1 = li1.cloneNode( true );
      ul1.appendChild( new_li1 );
      ul1.dataset.current = current + 1;
    }
  } );
} );












$(document).ready(function() {
$('#program').on('click', '#projekt1_nahled', function(){
    var $projekt1_popis =  $(this).siblings('.projekt1_popis');
    if($projekt1_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt1_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt1_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt1_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt1_popis').addClass('closed') } });
    }
  });

   $('#projekt1_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt1').click(function () {
    if($('#projekt1_nahled').hasClass('opened'))
    {
      $('#projekt1_nahled').removeClass('opened');  
    }else{
	$('#projekt1_nahled').addClass('opened');
    }if($('.projekt1_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt1_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt1_popis').addClass('closed') } });
    }
  });
	
	
	

	
	
	
$('#program').on('click', '#projekt2_nahled', function(){
    var $projekt2_popis =  $(this).siblings('.projekt2_popis');
    if($projekt2_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt2_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt2_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt2_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt2_popis').addClass('closed') } });
    }
  });

   $('#projekt2_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt2').click(function () {
    if($('#projekt2_nahled').hasClass('opened'))
    {
      $('#projekt2_nahled').removeClass('opened');  
    }else{
	$('#projekt2_nahled').addClass('opened');
    }if($('.projekt2_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt2_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt2_popis').addClass('closed') } });
    }
  });
		
	

	
	
	

	
	
	
	
	
	
$('#program').on('click', '#projekt3_nahled', function(){
    var $projekt3_popis =  $(this).siblings('.projekt3_popis');
    if($projekt3_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt3_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt3_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt3_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt3_popis').addClass('closed') } });
    }
  });

   $('#projekt3_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt3').click(function () {
    if($('#projekt3_nahled').hasClass('opened'))
    {
      $('#projekt3_nahled').removeClass('opened');  
    }else{
	$('#projekt3_nahled').addClass('opened');
    }if($('.projekt3_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt3_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt3_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	
	
	
	
	
$('#program').on('click', '#projekt4_nahled', function(){
    var $projekt4_popis =  $(this).siblings('.projekt4_popis');
    if($projekt4_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt4_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt4_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt4_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt4_popis').addClass('closed') } });
    }
  });

   $('#projekt4_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt4').click(function () {
    if($('#projekt4_nahled').hasClass('opened'))
    {
      $('#projekt4_nahled').removeClass('opened');  
    }else{
	$('#projekt4_nahled').addClass('opened');
    }if($('.projekt4_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt4_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt4_popis').addClass('closed') } });
    }
  });		
	
	
	
	
$('#program').on('click', '#projekt5_nahled', function(){
    var $projekt5_popis =  $(this).siblings('.projekt5_popis');
    if($projekt5_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt5_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt5_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt5_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt5_popis').addClass('closed') } });
    }
  });

   $('#projekt5_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt5').click(function () {
    if($('#projekt5_nahled').hasClass('opened'))
    {
      $('#projekt5_nahled').removeClass('opened');  
    }else{
	$('#projekt5_nahled').addClass('opened');
    }if($('.projekt5_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt5_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt5_popis').addClass('closed') } });
    }
  });		
		
	
	
$('#program').on('click', '#projekt6_nahled', function(){
    var $projekt6_popis =  $(this).siblings('.projekt6_popis');
    if($projekt6_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt6_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt6_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt6_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt6_popis').addClass('closed') } });
    }
  });

   $('#projekt6_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt6').click(function () {
    if($('#projekt6_nahled').hasClass('opened'))
    {
      $('#projekt6_nahled').removeClass('opened');  
    }else{
	$('#projekt6_nahled').addClass('opened');
    }if($('.projekt6_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt6_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt6_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	
	
	
	$('#program').on('click', '#projekt7_nahled', function(){
    var $projekt7_popis =  $(this).siblings('.projekt7_popis');
    if($projekt7_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt7_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt7_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt7_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt7_popis').addClass('closed') } });
    }
  });

   $('#projekt7_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt7').click(function () {
    if($('#projekt7_nahled').hasClass('opened'))
    {
      $('#projekt7_nahled').removeClass('opened');  
    }else{
	$('#projekt7_nahled').addClass('opened');
    }if($('.projekt7_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt7_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt7_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	
	
	
	$('#program').on('click', '#projekt8_nahled', function(){
    var $projekt8_popis =  $(this).siblings('.projekt8_popis');
    if($projekt8_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt8_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt8_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt8_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt8_popis').addClass('closed') } });
    }
  });

   $('#projekt8_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt8').click(function () {
    if($('#projekt8_nahled').hasClass('opened'))
    {
      $('#projekt8_nahled').removeClass('opened');  
    }else{
	$('#projekt8_nahled').addClass('opened');
    }if($('.projekt8_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt8_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt8_popis').addClass('closed') } });
    }
  });		

	
	
	

	$('#program').on('click', '#projekt9_nahled', function(){
    var $projekt9_popis =  $(this).siblings('.projekt9_popis');
    if($projekt9_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt9_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt9_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt9_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt9_popis').addClass('closed') } });
    }
  });

   $('#projekt9_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt9').click(function () {
    if($('#projekt9_nahled').hasClass('opened'))
    {
      $('#projekt9_nahled').removeClass('opened');  
    }else{
	$('#projekt9_nahled').addClass('opened');
    }if($('.projekt9_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt9_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt9_popis').addClass('closed') } });
    }
  });	

	
	
	
	
	$('#program').on('click', '#projekt10_nahled', function(){
    var $projekt10_popis =  $(this).siblings('.projekt10_popis');
    if($projekt10_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt10_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt10_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt10_popis').addClass('closed') } });
    }
  });

   $('#projekt10_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt10').click(function () {
    if($('#projekt10_nahled').hasClass('opened'))
    {
      $('#projekt10_nahled').removeClass('opened');  
    }else{
	$('#projekt10_nahled').addClass('opened');
    }if($('.projekt10_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt10_popis').addClass('closed') } });
    }
  });		

	
	
	
	$('#program').on('click', '#projekt11_nahled', function(){
    var $projekt11_popis =  $(this).siblings('.projekt11_popis');
    if($projekt11_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt11_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt11_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed') } });
    }
  });

   $('#projekt11_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt11').click(function () {
    if($('#projekt11_nahled').hasClass('opened'))
    {
      $('#projekt11_nahled').removeClass('opened');  
    }else{
	$('#projekt11_nahled').addClass('opened');
    }if($('.projekt11_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt12_nahled', function(){
    var $projekt12_popis =  $(this).siblings('.projekt12_popis');
    if($projekt12_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt12_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt12_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt12_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt12_popis').addClass('closed') } });
    }
  });

   $('#projekt12_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt12').click(function () {
    if($('#projekt12_nahled').hasClass('opened'))
    {
      $('#projekt12_nahled').removeClass('opened');  
    }else{
	$('#projekt12_nahled').addClass('opened');
    }if($('.projekt12_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt12_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt12_popis').addClass('closed') } });
    }
  });	
	
	
	
	$('#program').on('click', '#projekt13_nahled', function(){
    var $projekt13_popis =  $(this).siblings('.projekt13_popis');
    if($projekt13_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt13_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt13_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt13_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt13_popis').addClass('closed') } });
    }
  });

   $('#projekt13_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt13').click(function () {
    if($('#projekt13_nahled').hasClass('opened'))
    {
      $('#projekt13_nahled').removeClass('opened');  
    }else{
	$('#projekt13_nahled').addClass('opened');
    }if($('.projekt13_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt13_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt13_popis').addClass('closed') } });
    }
  });		
	
	
	

	$('#program').on('click', '#projekt14_nahled', function(){
    var $projekt14_popis =  $(this).siblings('.projekt14_popis');
    if($projekt14_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt14_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt14_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt14_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt14_popis').addClass('closed') } });
    }
  });

   $('#projekt14_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt14').click(function () {
    if($('#projekt14_nahled').hasClass('opened'))
    {
      $('#projekt14_nahled').removeClass('opened');  
    }else{
	$('#projekt14_nahled').addClass('opened');
    }if($('.projekt14_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt14_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt14_popis').addClass('closed') } });
    }
  });		
	

	
	
	$('#program').on('click', '#projekt15_nahled', function(){
    var $projekt15_popis =  $(this).siblings('.projekt15_popis');
    if($projekt15_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt15_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt15_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt15_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt15_popis').addClass('closed') } });
    }
  });

   $('#projekt15_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt15').click(function () {
    if($('#projekt15_nahled').hasClass('opened'))
    {
      $('#projekt15_nahled').removeClass('opened');  
    }else{
	$('#projekt15_nahled').addClass('opened');
    }if($('.projekt15_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt15_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt15_popis').addClass('closed') } });
    }
  });		
		
	
	
	
	$('#program').on('click', '#projekt16_nahled', function(){
    var $projekt16_popis =  $(this).siblings('.projekt16_popis');
    if($projekt16_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt16_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt16_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt16_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt16_popis').addClass('closed') } });
    }
  });

   $('#projekt16_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt16').click(function () {
    if($('#projekt16_nahled').hasClass('opened'))
    {
      $('#projekt16_nahled').removeClass('opened');  
    }else{
	$('#projekt16_nahled').addClass('opened');
    }if($('.projekt16_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt16_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt16_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	$('#program').on('click', '#projekt17_nahled', function(){
    var $projekt17_popis =  $(this).siblings('.projekt17_popis');
    if($projekt17_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt17_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt17_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt17_popis').addClass('closed') } });
    }
  });

   $('#projekt17_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt17').click(function () {
    if($('#projekt17_nahled').hasClass('opened'))
    {
      $('#projekt17_nahled').removeClass('opened');  
    }else{
	$('#projekt17_nahled').addClass('opened');
    }if($('.projekt17_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt17_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	
	$('#program').on('click', '#projekt18_nahled', function(){
    var $projekt18_popis =  $(this).siblings('.projekt18_popis');
    if($projekt18_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt18_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt18_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt18_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt18_popis').addClass('closed') } });
    }
  });

   $('#projekt18_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt18').click(function () {
    if($('#projekt18_nahled').hasClass('opened'))
    {
      $('#projekt18_nahled').removeClass('opened');  
    }else{
	$('#projekt18_nahled').addClass('opened');
    }if($('.projekt18_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt18_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt18_popis').addClass('closed') } });
    }
  });	
		
	
	
	
	
	$('#program').on('click', '#projekt19_nahled', function(){
    var $projekt19_popis =  $(this).siblings('.projekt19_popis');
    if($projekt19_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt19_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt19_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt19_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt19_popis').addClass('closed') } });
    }
  });

   $('#projekt19_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt19').click(function () {
    if($('#projekt19_nahled').hasClass('opened'))
    {
      $('#projekt19_nahled').removeClass('opened');  
    }else{
	$('#projekt19_nahled').addClass('opened');
    }if($('.projekt19_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt19_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt19_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt20_nahled', function(){
    var $projekt20_popis =  $(this).siblings('.projekt20_popis');
    if($projekt20_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt20_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt20_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt20_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt20_popis').addClass('closed') } });
    }
  });

   $('#projekt20_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt20').click(function () {
    if($('#projekt20_nahled').hasClass('opened'))
    {
      $('#projekt20_nahled').removeClass('opened');  
    }else{
	$('#projekt20_nahled').addClass('opened');
    }if($('.projekt20_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt20_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt20_popis').addClass('closed') } });
    }
  });	
	
	
	
	

	$('#program').on('click', '#projekt21_nahled', function(){
    var $projekt21_popis =  $(this).siblings('.projekt21_popis');
    if($projekt21_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt21_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt21_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt21_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt21_popis').addClass('closed') } });
    }
  });

   $('#projekt21_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt21').click(function () {
    if($('#projekt21_nahled').hasClass('opened'))
    {
      $('#projekt21_nahled').removeClass('opened');  
    }else{
	$('#projekt21_nahled').addClass('opened');
    }if($('.projekt21_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt21_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt21_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt22_nahled', function(){
    var $projekt22_popis =  $(this).siblings('.projekt22_popis');
    if($projekt22_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt22_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt22_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed') } });
    }
  });

   $('#projekt22_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt22').click(function () {
    if($('#projekt22_nahled').hasClass('opened'))
    {
      $('#projekt22_nahled').removeClass('opened');  
    }else{
	$('#projekt22_nahled').addClass('opened');
    }if($('.projekt22_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed') } });
    }
  });		
	
	
	
	$('#program').on('click', '#projekt23_nahled', function(){
    var $projekt23_popis =  $(this).siblings('.projekt23_popis');
    if($projekt23_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt23_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt23_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt23_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt23_popis').addClass('closed') } });
    }
  });

   $('#projekt23_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt23').click(function () {
    if($('#projekt23_nahled').hasClass('opened'))
    {
      $('#projekt23_nahled').removeClass('opened');  
    }else{
	$('#projekt23_nahled').addClass('opened');
    }if($('.projekt23_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt23_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt23_popis').addClass('closed') } });
    }
  });		
	
	
	
$('#program').on('click', '#projekt24_nahled', function(){
    var $projekt24_popis =  $(this).siblings('.projekt24_popis');
    if($projekt24_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt24_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt24_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt24_popis').addClass('closed') } });
    }
  });

   $('#projekt24_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt24').click(function () {
    if($('#projekt24_nahled').hasClass('opened'))
    {
      $('#projekt24_nahled').removeClass('opened');  
    }else{
	$('#projekt24_nahled').addClass('opened');
    }if($('.projekt24_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt24_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt25_nahled', function(){
    var $projekt25_popis =  $(this).siblings('.projekt25_popis');
    if($projekt25_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt25_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt25_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt25_popis').addClass('closed') } });
    }
  });

   $('#projekt25_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt25').click(function () {
    if($('#projekt25_nahled').hasClass('opened'))
    {
      $('#projekt25_nahled').removeClass('opened');  
    }else{
	$('#projekt25_nahled').addClass('opened');
    }if($('.projekt25_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt25_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt26_nahled', function(){
    var $projekt26_popis =  $(this).siblings('.projekt26_popis');
    if($projekt26_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt26_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt26_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt26_popis').addClass('closed') } });
    }
  });

   $('#projekt26_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt26').click(function () {
    if($('#projekt26_nahled').hasClass('opened'))
    {
      $('#projekt26_nahled').removeClass('opened');  
    }else{
	$('#projekt26_nahled').addClass('opened');
    }if($('.projekt26_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt26_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	
	$('#program').on('click', '#projekt27_nahled', function(){
    var $projekt27_popis =  $(this).siblings('.projekt27_popis');
    if($projekt27_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt27_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt27_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt27_popis').addClass('closed') } });
    }
  });

   $('#projekt27_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt27').click(function () {
    if($('#projekt27_nahled').hasClass('opened'))
    {
      $('#projekt27_nahled').removeClass('opened');  
    }else{
	$('#projekt27_nahled').addClass('opened');
    }if($('.projekt27_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt27_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	$('#program').on('click', '#projekt28_nahled', function(){
    var $projekt28_popis =  $(this).siblings('.projekt28_popis');
    if($projekt28_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt28_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt28_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt28_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt28_popis').addClass('closed') } });
    }
  });

   $('#projekt28_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt28').click(function () {
    if($('#projekt28_nahled').hasClass('opened'))
    {
      $('#projekt28_nahled').removeClass('opened');  
    }else{
	$('#projekt28_nahled').addClass('opened');
    }if($('.projekt28_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt28_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt28_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	
	$('#program').on('click', '#projekt29_nahled', function(){
    var $projekt29_popis =  $(this).siblings('.projekt29_popis');
    if($projekt29_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt29_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt29_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt29_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt29_popis').addClass('closed') } });
    }
  });

   $('#projekt29_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt29').click(function () {
    if($('#projekt29_nahled').hasClass('opened'))
    {
      $('#projekt29_nahled').removeClass('opened');  
    }else{
	$('#projekt29_nahled').addClass('opened');
    }if($('.projekt29_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt29_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt29_popis').addClass('closed') } });
    }
  });		
	
	
	
	$('#program').on('click', '#projekt30_nahled', function(){
    var $projekt30_popis =  $(this).siblings('.projekt30_popis');
    if($projekt30_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt30_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt30_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt30_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt30_popis').addClass('closed') } });
    }
  });

   $('#projekt30_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt30').click(function () {
    if($('#projekt30_nahled').hasClass('opened'))
    {
      $('#projekt30_nahled').removeClass('opened');  
    }else{
	$('#projekt30_nahled').addClass('opened');
    }if($('.projekt30_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt30_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt30_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt31_nahled', function(){
    var $projekt31_popis =  $(this).siblings('.projekt31_popis');
    if($projekt31_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt31_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt31_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt31_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt31_popis').addClass('closed') } });
    }
  });

   $('#projekt31_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt31').click(function () {
    if($('#projekt31_nahled').hasClass('opened'))
    {
      $('#projekt31_nahled').removeClass('opened');  
    }else{
	$('#projekt31_nahled').addClass('opened');
    }if($('.projekt31_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt31_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt31_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt32_nahled', function(){
    var $projekt32_popis =  $(this).siblings('.projekt32_popis');
    if($projekt32_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt32_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt32_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt32_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt32_popis').addClass('closed') } });
    }
  });

   $('#projekt32_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt32').click(function () {
    if($('#projekt32_nahled').hasClass('opened'))
    {
      $('#projekt32_nahled').removeClass('opened');  
    }else{
	$('#projekt32_nahled').addClass('opened');
    }if($('.projekt32_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt32_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt32_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	
	$('#program').on('click', '#projekt33_nahled', function(){
    var $projekt33_popis =  $(this).siblings('.projekt33_popis');
    if($projekt33_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt33_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt33_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt33_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt33_popis').addClass('closed') } });
    }
  });

   $('#projekt33_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt33').click(function () {
    if($('#projekt33_nahled').hasClass('opened'))
    {
      $('#projekt33_nahled').removeClass('opened');  
    }else{
	$('#projekt33_nahled').addClass('opened');
    }if($('.projekt33_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt33_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt33_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt34_nahled', function(){
    var $projekt34_popis =  $(this).siblings('.projekt34_popis');
    if($projekt34_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt34_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt34_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt34_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt34_popis').addClass('closed') } });
    }
  });

   $('#projekt34_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt34').click(function () {
    if($('#projekt34_nahled').hasClass('opened'))
    {
      $('#projekt34_nahled').removeClass('opened');  
    }else{
	$('#projekt34_nahled').addClass('opened');
    }if($('.projekt34_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt34_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt34_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt35_nahled', function(){
    var $projekt35_popis =  $(this).siblings('.projekt35_popis');
    if($projekt35_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt35_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt35_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt35_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt35_popis').addClass('closed') } });
    }
  });

   $('#projekt35_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt35').click(function () {
    if($('#projekt35_nahled').hasClass('opened'))
    {
      $('#projekt35_nahled').removeClass('opened');  
    }else{
	$('#projekt35_nahled').addClass('opened');
    }if($('.projekt35_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt35_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt35_popis').addClass('closed') } });
    }
  });		
	
	
	
	$('#program').on('click', '#projekt36_nahled', function(){
    var $projekt36_popis =  $(this).siblings('.projekt36_popis');
    if($projekt36_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt36_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt36_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt36_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt36_popis').addClass('closed') } });
    }
  });

   $('#projekt36_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt36').click(function () {
    if($('#projekt36_nahled').hasClass('opened'))
    {
      $('#projekt36_nahled').removeClass('opened');  
    }else{
	$('#projekt36_nahled').addClass('opened');
    }if($('.projekt36_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt36_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt36_popis').addClass('closed') } });
    }
  });	
	
	
	
	$('#program').on('click', '#projekt37_nahled', function(){
    var $projekt37_popis =  $(this).siblings('.projekt37_popis');
    if($projekt37_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt37_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt37_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt37_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt37_popis').addClass('closed') } });
    }
  });

   $('#projekt37_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt37').click(function () {
    if($('#projekt37_nahled').hasClass('opened'))
    {
      $('#projekt37_nahled').removeClass('opened');  
    }else{
	$('#projekt37_nahled').addClass('opened');
    }if($('.projekt37_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt37_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt37_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	$('#program').on('click', '#projekt38_nahled', function(){
    var $projekt38_popis =  $(this).siblings('.projekt38_popis');
    if($projekt38_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt38_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt38_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt38_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt38_popis').addClass('closed') } });
    }
  });

   $('#projekt38_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt38').click(function () {
    if($('#projekt38_nahled').hasClass('opened'))
    {
      $('#projekt38_nahled').removeClass('opened');  
    }else{
	$('#projekt38_nahled').addClass('opened');
    }if($('.projekt38_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt38_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt38_popis').addClass('closed') } });
    }
  });	
	
	
	
	$('#program').on('click', '#projekt39_nahled', function(){
    var $projekt39_popis =  $(this).siblings('.projekt39_popis');
    if($projekt39_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt39_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt39_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt39_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt39_popis').addClass('closed') } });
    }
  });

   $('#projekt39_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt39').click(function () {
    if($('#projekt39_nahled').hasClass('opened'))
    {
      $('#projekt39_nahled').removeClass('opened');  
    }else{
	$('#projekt39_nahled').addClass('opened');
    }if($('.projekt39_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt39_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt39_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt40_nahled', function(){
    var $projekt40_popis =  $(this).siblings('.projekt40_popis');
    if($projekt40_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt40_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt40_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt40_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt40_popis').addClass('closed') } });
    }
  });

   $('#projekt40_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt40').click(function () {
    if($('#projekt40_nahled').hasClass('opened'))
    {
      $('#projekt40_nahled').removeClass('opened');  
    }else{
	$('#projekt40_nahled').addClass('opened');
    }if($('.projekt40_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt40_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt40_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt41_nahled', function(){
    var $projekt41_popis =  $(this).siblings('.projekt41_popis');
    if($projekt41_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt41_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt41_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt41_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt41_popis').addClass('closed') } });
    }
  });

   $('#projekt41_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt41').click(function () {
    if($('#projekt41_nahled').hasClass('opened'))
    {
      $('#projekt41_nahled').removeClass('opened');  
    }else{
	$('#projekt41_nahled').addClass('opened');
    }if($('.projekt41_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt41_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt41_popis').addClass('closed') } });
    }
  });		
		
	

	$('#program').on('click', '#projekt42_nahled', function(){
    var $projekt42_popis =  $(this).siblings('.projekt42_popis');
    if($projekt42_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt42_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt42_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt42_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt42_popis').addClass('closed') } });
    }
  });

   $('#projekt42_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt42').click(function () {
    if($('#projekt42_nahled').hasClass('opened'))
    {
      $('#projekt42_nahled').removeClass('opened');  
    }else{
	$('#projekt42_nahled').addClass('opened');
    }if($('.projekt42_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt42_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt42_popis').addClass('closed') } });
    }
  });		
		
	
	
	$('#program').on('click', '#projekt43_nahled', function(){
    var $projekt43_popis =  $(this).siblings('.projekt43_popis');
    if($projekt43_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt43_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt43_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt43_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt43_popis').addClass('closed') } });
    }
  });

   $('#projekt43_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt43').click(function () {
    if($('#projekt43_nahled').hasClass('opened'))
    {
      $('#projekt43_nahled').removeClass('opened');  
    }else{
	$('#projekt43_nahled').addClass('opened');
    }if($('.projekt43_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt43_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt43_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt44_nahled', function(){
    var $projekt44_popis =  $(this).siblings('.projekt44_popis');
    if($projekt44_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt44_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt44_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt44_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt44_popis').addClass('closed') } });
    }
  });

   $('#projekt44_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt44').click(function () {
    if($('#projekt44_nahled').hasClass('opened'))
    {
      $('#projekt44_nahled').removeClass('opened');  
    }else{
	$('#projekt44_nahled').addClass('opened');
    }if($('.projekt44_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt44_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt44_popis').addClass('closed') } });
    }
  });		
		
	
	$('#program').on('click', '#projekt45_nahled', function(){
    var $projekt45_popis =  $(this).siblings('.projekt45_popis');
    if($projekt45_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt45_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt45_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt45_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt45_popis').addClass('closed') } });
    }
  });

   $('#projekt45_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt45').click(function () {
    if($('#projekt45_nahled').hasClass('opened'))
    {
      $('#projekt45_nahled').removeClass('opened');  
    }else{
	$('#projekt45_nahled').addClass('opened');
    }if($('.projekt45_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt45_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt45_popis').addClass('closed') } });
    }
  });		
			
	
	
	$('#program').on('click', '#projekt46_nahled', function(){
    var $projekt46_popis =  $(this).siblings('.projekt46_popis');
    if($projekt46_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt46_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt46_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt46_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt46_popis').addClass('closed') } });
    }
  });

   $('#projekt46_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt46').click(function () {
    if($('#projekt46_nahled').hasClass('opened'))
    {
      $('#projekt46_nahled').removeClass('opened');  
    }else{
	$('#projekt46_nahled').addClass('opened');
    }if($('.projekt46_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt46_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt46_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	$('#program').on('click', '#projekt47_nahled', function(){
    var $projekt47_popis =  $(this).siblings('.projekt47_popis');
    if($projekt47_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt47_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt47_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt47_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt47_popis').addClass('closed') } });
    }
  });

   $('#projekt47_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt47').click(function () {
    if($('#projekt47_nahled').hasClass('opened'))
    {
      $('#projekt47_nahled').removeClass('opened');  
    }else{
	$('#projekt47_nahled').addClass('opened');
    }if($('.projekt47_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt47_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt47_popis').addClass('closed') } });
    }
  });		
		
	
	
	$('#program').on('click', '#projekt48_nahled', function(){
    var $projekt48_popis =  $(this).siblings('.projekt48_popis');
    if($projekt48_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt48_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt48_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt48_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt48_popis').addClass('closed') } });
    }
  });

   $('#projekt48_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt48').click(function () {
    if($('#projekt48_nahled').hasClass('opened'))
    {
      $('#projekt48_nahled').removeClass('opened');  
    }else{
	$('#projekt48_nahled').addClass('opened');
    }if($('.projekt48_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt48_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt48_popis').addClass('closed') } });
    }
  });			
	
	
	
	$('#program').on('click', '#projekt49_nahled', function(){
    var $projekt49_popis =  $(this).siblings('.projekt49_popis');
    if($projekt49_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt49_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt49_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt49_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt49_popis').addClass('closed') } });
    }
  });

   $('#projekt49_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt49').click(function () {
    if($('#projekt49_nahled').hasClass('opened'))
    {
      $('#projekt49_nahled').removeClass('opened');  
    }else{
	$('#projekt49_nahled').addClass('opened');
    }if($('.projekt49_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt49_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt49_popis').addClass('closed') } });
    }
  });	
	
	
	$('#program').on('click', '#projekt50_nahled', function(){
    var $projekt50_popis =  $(this).siblings('.projekt50_popis');
    if($projekt50_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt50_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt50_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt50_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt50_popis').addClass('closed') } });
    }
  });

   $('#projekt50_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt50').click(function () {
    if($('#projekt50_nahled').hasClass('opened'))
    {
      $('#projekt50_nahled').removeClass('opened');  
    }else{
	$('#projekt50_nahled').addClass('opened');
    }if($('.projekt50_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt50_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt50_popis').addClass('closed') } });
    }
  });		
	
	
	

	$('#program').on('click', '#projekt51_nahled', function(){
    var $projekt51_popis =  $(this).siblings('.projekt51_popis');
    if($projekt51_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt51_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt51_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt51_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt51_popis').addClass('closed') } });
    }
  });

   $('#projekt51_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt51').click(function () {
    if($('#projekt51_nahled').hasClass('opened'))
    {
      $('#projekt51_nahled').removeClass('opened');  
    }else{
	$('#projekt51_nahled').addClass('opened');
    }if($('.projekt51_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt51_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt51_popis').addClass('closed') } });
    }
  });		
		
	
	

	$('#program').on('click', '#projekt52_nahled', function(){
    var $projekt52_popis =  $(this).siblings('.projekt52_popis');
    if($projekt52_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt52_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt52_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed') } });
    }
  });

   $('#projekt52_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt52').click(function () {
    if($('#projekt52_nahled').hasClass('opened'))
    {
      $('#projekt52_nahled').removeClass('opened');  
    }else{
	$('#projekt52_nahled').addClass('opened');
    }if($('.projekt52_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed') } });
    }
  });		
	
	
	
	

	$('#program').on('click', '#projekt53_nahled', function(){
    var $projekt53_popis =  $(this).siblings('.projekt53_popis');
    if($projekt53_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt53_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt53_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt53_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt53_popis').addClass('closed') } });
    }
  });

   $('#projekt53_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt53').click(function () {
    if($('#projekt53_nahled').hasClass('opened'))
    {
      $('#projekt53_nahled').removeClass('opened');  
    }else{
	$('#projekt53_nahled').addClass('opened');
    }if($('.projekt53_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt53_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt53_popis').addClass('closed') } });
    }
  });	
	
	
	

	$('#program').on('click', '#projekt54_nahled', function(){
    var $projekt54_popis =  $(this).siblings('.projekt54_popis');
    if($projekt54_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt54_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt54_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt54_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt54_popis').addClass('closed') } });
    }
  });

   $('#projekt54_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt54').click(function () {
    if($('#projekt54_nahled').hasClass('opened'))
    {
      $('#projekt54_nahled').removeClass('opened');  
    }else{
	$('#projekt54_nahled').addClass('opened');
    }if($('.projekt54_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt54_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt54_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	$('#program').on('click', '#projekt55_nahled', function(){
    var $projekt55_popis =  $(this).siblings('.projekt55_popis');
    if($projekt55_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt55_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt55_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt55_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt55_popis').addClass('closed') } });
    }
  });

   $('#projekt55_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt55').click(function () {
    if($('#projekt55_nahled').hasClass('opened'))
    {
      $('#projekt55_nahled').removeClass('opened');  
    }else{
	$('#projekt55_nahled').addClass('opened');
    }if($('.projekt55_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt55_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt55_popis').addClass('closed') } });
    }
  });		
	
	
	
	$('#program').on('click', '#projekt56_nahled', function(){
    var $projekt56_popis =  $(this).siblings('.projekt56_popis');
    if($projekt56_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt56_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt56_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt56_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt56_popis').addClass('closed') } });
    }
  });

   $('#projekt56_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt56').click(function () {
    if($('#projekt56_nahled').hasClass('opened'))
    {
      $('#projekt56_nahled').removeClass('opened');  
    }else{
	$('#projekt56_nahled').addClass('opened');
    }if($('.projekt56_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt56_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt56_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	
	

	$('#program').on('click', '#projekt57_nahled', function(){
    var $projekt57_popis =  $(this).siblings('.projekt57_popis');
    if($projekt57_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt57_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt57_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt57_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt57_popis').addClass('closed') } });
    }
  });

   $('#projekt57_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt57').click(function () {
    if($('#projekt57_nahled').hasClass('opened'))
    {
      $('#projekt57_nahled').removeClass('opened');  
    }else{
	$('#projekt57_nahled').addClass('opened');
    }if($('.projekt57_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt57_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt57_popis').addClass('closed') } });
    }
  });		
	
	
	
	
	$('#program').on('click', '#projekt58_nahled', function(){
    var $projekt58_popis =  $(this).siblings('.projekt58_popis');
    if($projekt58_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt58_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt58_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt58_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt58_popis').addClass('closed') } });
    }
  });

   $('#projekt58_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt58').click(function () {
    if($('#projekt58_nahled').hasClass('opened'))
    {
      $('#projekt58_nahled').removeClass('opened');  
    }else{
	$('#projekt58_nahled').addClass('opened');
    }if($('.projekt58_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt58_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt58_popis').addClass('closed') } });
    }
  });	
	
	
	$('#program').on('click', '#projekt59_nahled', function(){
    var $projekt59_popis =  $(this).siblings('.projekt59_popis');
    if($projekt59_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt59_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt59_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt59_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt59_popis').addClass('closed') } });
    }
  });

   $('#projekt59_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt59').click(function () {
    if($('#projekt59_nahled').hasClass('opened'))
    {
      $('#projekt59_nahled').removeClass('opened');  
    }else{
	$('#projekt59_nahled').addClass('opened');
    }if($('.projekt59_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt59_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt59_popis').addClass('closed') } });
    }
  });		
	
$('#program').on('click', '#projekt60_nahled', function(){
    var $projekt60_popis =  $(this).siblings('.projekt60_popis');
    if($projekt60_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt60_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt60_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt60_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt60_popis').addClass('closed') } });
    }
  });

   $('#projekt60_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt60').click(function () {
    if($('#projekt60_nahled').hasClass('opened'))
    {
      $('#projekt60_nahled').removeClass('opened');  
    }else{
	$('#projekt60_nahled').addClass('opened');
    }if($('.projekt60_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt60_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt60_popis').addClass('closed') } });
    }
  });		
	

$('#program').on('click', '#projekt61_nahled', function(){
    var $projekt61_popis =  $(this).siblings('.projekt61_popis');
    if($projekt61_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt61_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt61_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt61_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt61_popis').addClass('closed') } });
    }
  });

   $('#projekt61_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt61').click(function () {
    if($('#projekt61_nahled').hasClass('opened'))
    {
      $('#projekt61_nahled').removeClass('opened');  
    }else{
	$('#projekt61_nahled').addClass('opened');
    }if($('.projekt61_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt61_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt61_popis').addClass('closed') } });
    }
  });			
	
$('#program').on('click', '#projekt62_nahled', function(){
    var $projekt62_popis =  $(this).siblings('.projekt62_popis');
    if($projekt62_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt62_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt62_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt62_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt62_popis').addClass('closed') } });
    }
  });

   $('#projekt62_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt62').click(function () {
    if($('#projekt62_nahled').hasClass('opened'))
    {
      $('#projekt62_nahled').removeClass('opened');  
    }else{
	$('#projekt62_nahled').addClass('opened');
    }if($('.projekt62_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt62_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt62_popis').addClass('closed') } });
    }
  });		
	

$('#program').on('click', '#projekt63_nahled', function(){
    var $projekt63_popis =  $(this).siblings('.projekt63_popis');
    if($projekt63_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt63_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt63_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt63_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt63_popis').addClass('closed') } });
    }
  });

   $('#projekt63_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt63').click(function () {
    if($('#projekt63_nahled').hasClass('opened'))
    {
      $('#projekt63_nahled').removeClass('opened');  
    }else{
	$('#projekt63_nahled').addClass('opened');
    }if($('.projekt63_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt63_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt63_popis').addClass('closed') } });
    }
  });			
	

	
$('#program').on('click', '#projekt64_nahled', function(){
    var $projekt64_popis =  $(this).siblings('.projekt64_popis');
    if($projekt64_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt64_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt64_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt64_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt64_popis').addClass('closed') } });
    }
  });	
   $('#projekt64_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt64').click(function () {
    if($('#projekt64_nahled').hasClass('opened'))
    {
      $('#projekt64_nahled').removeClass('opened');  
    }else{
	$('#projekt64_nahled').addClass('opened');
    }if($('.projekt64_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt64_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt64_popis').addClass('closed') } });
    }
  });			
	
	
	
$('#program').on('click', '#projekt65_nahled', function(){
    var $projekt65_popis =  $(this).siblings('.projekt65_popis');
    if($projekt65_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt65_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt65_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt65_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt65_popis').addClass('closed') } });
    }
  });	
   $('#projekt65_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt65').click(function () {
    if($('#projekt65_nahled').hasClass('opened'))
    {
      $('#projekt65_nahled').removeClass('opened');  
    }else{
	$('#projekt65_nahled').addClass('opened');
    }if($('.projekt65_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt65_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt65_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	
$('#program').on('click', '#text1_nahled', function(){
    var $text1_popis =  $(this).siblings('.text1_popis');
    if($text1_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text1_popis.velocity("slideDown", { duration: 800, complete: function() { $text1_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text1_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text1_popis').addClass('closed') } });
    }
  });

   $('#text1_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text1').click(function () {
    if($('#text1_nahled').hasClass('opened'))
    {
      $('#text1_nahled').removeClass('opened');  
    }else{
	$('#text1_nahled').addClass('opened');
    }if($('.text1_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text1_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text1_popis').addClass('closed') } });
    }
  });			
	
	
	
$('#program').on('click', '#text2_nahled', function(){
    var $text2_popis =  $(this).siblings('.text2_popis');
    if($text2_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text2_popis.velocity("slideDown", { duration: 800, complete: function() { $text2_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text2_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text2_popis').addClass('closed') } });
    }
  });

   $('#text2_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text2').click(function () {
    if($('#text2_nahled').hasClass('opened'))
    {
      $('#text2_nahled').removeClass('opened');  
    }else{
	$('#text2_nahled').addClass('opened');
    }if($('.text2_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text2_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text2_popis').addClass('closed') } });
    }
  });			
		
	
$('#program').on('click', '#text3_nahled', function(){
    var $text3_popis =  $(this).siblings('.text3_popis');
    if($text3_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text3_popis.velocity("slideDown", { duration: 800, complete: function() { $text3_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text3_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text3_popis').addClass('closed') } });
    }
  });

   $('#text3_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text3').click(function () {
    if($('#text3_nahled').hasClass('opened'))
    {
      $('#text3_nahled').removeClass('opened');  
    }else{
	$('#text3_nahled').addClass('opened');
    }if($('.text3_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text3_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text3_popis').addClass('closed') } });
    }
  });				
	
	
	
	
$('#program').on('click', '#text4_nahled', function(){
    var $text4_popis =  $(this).siblings('.text4_popis');
    if($text4_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text4_popis.velocity("slideDown", { duration: 800, complete: function() { $text4_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text4_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text4_popis').addClass('closed') } });
    }
  });

   $('#text4_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text4').click(function () {
    if($('#text4_nahled').hasClass('opened'))
    {
      $('#text4_nahled').removeClass('opened');  
    }else{
	$('#text4_nahled').addClass('opened');
    }if($('.text4_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text4_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text4_popis').addClass('closed') } });
    }
  });		
	

$('#program').on('click', '#text5_nahled', function(){
    var $text5_popis =  $(this).siblings('.text5_popis');
    if($text5_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text5_popis.velocity("slideDown", { duration: 800, complete: function() { $text5_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text5_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text5_popis').addClass('closed') } });
    }
  });

   $('#text5_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text5').click(function () {
    if($('#text5_nahled').hasClass('opened'))
    {
      $('#text5_nahled').removeClass('opened');  
    }else{
	$('#text5_nahled').addClass('opened');
    }if($('.text5_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text5_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text5_popis').addClass('closed') } });
    }
  });		
	

	
$('#program').on('click', '#text6_nahled', function(){
    var $text6_popis =  $(this).siblings('.text6_popis');
    if($text6_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text6_popis.velocity("slideDown", { duration: 800, complete: function() { $text6_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text6_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text6_popis').addClass('closed') } });
    }
  });

   $('#text6_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text6').click(function () {
    if($('#text6_nahled').hasClass('opened'))
    {
      $('#text6_nahled').removeClass('opened');  
    }else{
	$('#text6_nahled').addClass('opened');
    }if($('.text6_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text6_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text6_popis').addClass('closed') } });
    }
  });			
	

	
$('#program').on('click', '#text7_nahled', function(){
    var $text7_popis =  $(this).siblings('.text7_popis');
    if($text7_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text7_popis.velocity("slideDown", { duration: 800, complete: function() { $text7_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text7_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text7_popis').addClass('closed') } });
    }
  });

   $('#text7_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text7').click(function () {
    if($('#text7_nahled').hasClass('opened'))
    {
      $('#text7_nahled').removeClass('opened');  
    }else{
	$('#text7_nahled').addClass('opened');
    }if($('.text7_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text7_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text7_popis').addClass('closed') } });
    }
  });		
	

$('#program').on('click', '#text8_nahled', function(){
    var $text8_popis =  $(this).siblings('.text8_popis');
    if($text8_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text8_popis.velocity("slideDown", { duration: 800, complete: function() { $text8_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text8_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text8_popis').addClass('closed') } });
    }
  });

   $('#text8_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text8').click(function () {
    if($('#text8_nahled').hasClass('opened'))
    {
      $('#text8_nahled').removeClass('opened');  
    }else{
	$('#text8_nahled').addClass('opened');
    }if($('.text8_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text8_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text8_popis').addClass('closed') } });
    }
  });		
		


$('#program').on('click', '#text9_nahled', function(){
    var $text9_popis =  $(this).siblings('.text9_popis');
    if($text9_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text9_popis.velocity("slideDown", { duration: 800, complete: function() { $text9_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text9_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text9_popis').addClass('closed') } });
    }
  });

   $('#text9_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text9').click(function () {
    if($('#text9_nahled').hasClass('opened'))
    {
      $('#text9_nahled').removeClass('opened');  
    }else{
	$('#text9_nahled').addClass('opened');
    }if($('.text9_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text9_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text9_popis').addClass('closed') } });
    }
  });		
	
	
$('#program').on('click', '#text10_nahled', function(){
    var $text10_popis =  $(this).siblings('.text10_popis');
    if($text10_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text10_popis.velocity("slideDown", { duration: 800, complete: function() { $text10_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text10_popis').addClass('closed') } });
    }
  });

   $('#text10_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text10').click(function () {
    if($('#text10_nahled').hasClass('opened'))
    {
      $('#text10_nahled').removeClass('opened');  
    }else{
	$('#text10_nahled').addClass('opened');
    }if($('.text10_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text10_popis').addClass('closed') } });
    }
  });		
		

$('#program').on('click', '#text11_nahled', function(){
    var $text11_popis =  $(this).siblings('.text11_popis');
    if($text11_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text11_popis.velocity("slideDown", { duration: 800, complete: function() { $text11_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text11_popis').addClass('closed') } });
    }
  });

   $('#text11_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text11').click(function () {
    if($('#text11_nahled').hasClass('opened'))
    {
      $('#text11_nahled').removeClass('opened');  
    }else{
	$('#text11_nahled').addClass('opened');
    }if($('.text11_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text11_popis').addClass('closed') } });
    }
  });			
	

$('#program').on('click', '#text12_nahled', function(){
    var $text12_popis =  $(this).siblings('.text12_popis');
    if($text12_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text12_popis.velocity("slideDown", { duration: 800, complete: function() { $text12_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text12_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text12_popis').addClass('closed') } });
    }
  });

   $('#text12_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text12').click(function () {
    if($('#text12_nahled').hasClass('opened'))
    {
      $('#text12_nahled').removeClass('opened');  
    }else{
	$('#text12_nahled').addClass('opened');
    }if($('.text12_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text12_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text12_popis').addClass('closed') } });
    }
  });				
	
$('#program').on('click', '#text13_nahled', function(){
    var $text13_popis =  $(this).siblings('.text13_popis');
    if($text13_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text13_popis.velocity("slideDown", { duration: 800, complete: function() { $text13_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text13_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text13_popis').addClass('closed') } });
    }
  });

   $('#text13_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text13').click(function () {
    if($('#text13_nahled').hasClass('opened'))
    {
      $('#text13_nahled').removeClass('opened');  
    }else{
	$('#text13_nahled').addClass('opened');
    }if($('.text13_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text13_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text13_popis').addClass('closed') } });
    }
  });		
	
	
$('#program').on('click', '#text14_nahled', function(){
    var $text14_popis =  $(this).siblings('.text14_popis');
    if($text14_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text14_popis.velocity("slideDown", { duration: 800, complete: function() { $text14_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text14_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text14_popis').addClass('closed') } });
    }
  });

   $('#text14_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text14').click(function () {
    if($('#text14_nahled').hasClass('opened'))
    {
      $('#text14_nahled').removeClass('opened');  
    }else{
	$('#text14_nahled').addClass('opened');
    }if($('.text14_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text14_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text14_popis').addClass('closed') } });
    }
  });	
	
	
$('#program').on('click', '#text15_nahled', function(){
    var $text15_popis =  $(this).siblings('.text15_popis');
    if($text15_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text15_popis.velocity("slideDown", { duration: 800, complete: function() { $text15_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text15_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text15_popis').addClass('closed') } });
    }
  });

   $('#text15_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text15').click(function () {
    if($('#text15_nahled').hasClass('opened'))
    {
      $('#text15_nahled').removeClass('opened');  
    }else{
	$('#text15_nahled').addClass('opened');
    }if($('.text15_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text15_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text15_popis').addClass('closed') } });
    }
  });		
	
	
$('#program').on('click', '#text16_nahled', function(){
    var $text16_popis =  $(this).siblings('.text16_popis');
    if($text16_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text16_popis.velocity("slideDown", { duration: 800, complete: function() { $text16_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text16_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text16_popis').addClass('closed') } });
    }
  });

   $('#text16_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text16').click(function () {
    if($('#text16_nahled').hasClass('opened'))
    {
      $('#text16_nahled').removeClass('opened');  
    }else{
	$('#text16_nahled').addClass('opened');
    }if($('.text16_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text16_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text16_popis').addClass('closed') } });
    }
  });	
	
	
$('#program').on('click', '#text17_nahled', function(){
    var $text17_popis =  $(this).siblings('.text17_popis');
    if($text17_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text17_popis.velocity("slideDown", { duration: 800, complete: function() { $text17_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text17_popis').addClass('closed') } });
    }
  });

   $('#text17_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text17').click(function () {
    if($('#text17_nahled').hasClass('opened'))
    {
      $('#text17_nahled').removeClass('opened');  
    }else{
	$('#text17_nahled').addClass('opened');
    }if($('.text17_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text17_popis').addClass('closed') } });
    }
  });	
	
	
$('#program').on('click', '#text18_nahled', function(){
    var $text18_popis =  $(this).siblings('.text18_popis');
    if($text18_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text18_popis.velocity("slideDown", { duration: 800, complete: function() { $text18_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text18_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text18_popis').addClass('closed') } });
    }
  });

   $('#text18_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text18').click(function () {
    if($('#text18_nahled').hasClass('opened'))
    {
      $('#text18_nahled').removeClass('opened');  
    }else{
	$('#text18_nahled').addClass('opened');
    }if($('.text18_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text18_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text18_popis').addClass('closed') } });
    }
  });		
	
	
$('#program').on('click', '#text19_nahled', function(){
    var $text19_popis =  $(this).siblings('.text19_popis');
    if($text19_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text19_popis.velocity("slideDown", { duration: 800, complete: function() { $text19_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text19_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text19_popis').addClass('closed') } });
    }
  });

   $('#text19_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text19').click(function () {
    if($('#text19_nahled').hasClass('opened'))
    {
      $('#text19_nahled').removeClass('opened');  
    }else{
	$('#text19_nahled').addClass('opened');
    }if($('.text19_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text19_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text19_popis').addClass('closed') } });
    }
  });		
		
	
$('#program').on('click', '#text20_nahled', function(){
    var $text20_popis =  $(this).siblings('.text20_popis');
    if($text20_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text20_popis.velocity("slideDown", { duration: 800, complete: function() { $text20_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text20_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text20_popis').addClass('closed') } });
    }
  });

   $('#text20_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text20').click(function () {
    if($('#text20_nahled').hasClass('opened'))
    {
      $('#text20_nahled').removeClass('opened');  
    }else{
	$('#text20_nahled').addClass('opened');
    }if($('.text20_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text20_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text20_popis').addClass('closed') } });
    }
  });		
		
	
$('#program').on('click', '#text21_nahled', function(){
    var $text21_popis =  $(this).siblings('.text21_popis');
    if($text21_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text21_popis.velocity("slideDown", { duration: 800, complete: function() { $text21_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text21_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text21_popis').addClass('closed') } });
    }
  });

   $('#text21_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text21').click(function () {
    if($('#text21_nahled').hasClass('opened'))
    {
      $('#text21_nahled').removeClass('opened');  
    }else{
	$('#text21_nahled').addClass('opened');
    }if($('.text21_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text21_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text21_popis').addClass('closed') } });
    }
  });		
	
	
	
$('#program').on('click', '#text22_nahled', function(){
    var $text22_popis =  $(this).siblings('.text22_popis');
    if($text22_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text22_popis.velocity("slideDown", { duration: 800, complete: function() { $text22_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text22_popis').addClass('closed') } });
    }
  });

   $('#text22_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text22').click(function () {
    if($('#text22_nahled').hasClass('opened'))
    {
      $('#text22_nahled').removeClass('opened');  
    }else{
	$('#text22_nahled').addClass('opened');
    }if($('.text22_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text22_popis').addClass('closed') } });
    }
  });	
	
	
$('#program').on('click', '#text23_nahled', function(){
    var $text23_popis =  $(this).siblings('.text23_popis');
    if($text23_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text23_popis.velocity("slideDown", { duration: 800, complete: function() { $text23_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text23_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text23_popis').addClass('closed') } });
    }
  });

   $('#text23_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text23').click(function () {
    if($('#text23_nahled').hasClass('opened'))
    {
      $('#text23_nahled').removeClass('opened');  
    }else{
	$('#text23_nahled').addClass('opened');
    }if($('.text23_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text23_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text23_popis').addClass('closed') } });
    }
  });		
	
	
$('#program').on('click', '#text24_nahled', function(){
    var $text24_popis =  $(this).siblings('.text24_popis');
    if($text24_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text24_popis.velocity("slideDown", { duration: 800, complete: function() { $text24_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text24_popis').addClass('closed') } });
    }
  });

   $('#text24_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text24').click(function () {
    if($('#text24_nahled').hasClass('opened'))
    {
      $('#text24_nahled').removeClass('opened');  
    }else{
	$('#text24_nahled').addClass('opened');
    }if($('.text24_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text24_popis').addClass('closed') } });
    }
  });	

	
$('#program').on('click', '#text25_nahled', function(){
    var $text25_popis =  $(this).siblings('.text25_popis');
    if($text25_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text25_popis.velocity("slideDown", { duration: 800, complete: function() { $text25_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text25_popis').addClass('closed') } });
    }
  });

   $('#text25_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text25').click(function () {
    if($('#text25_nahled').hasClass('opened'))
    {
      $('#text25_nahled').removeClass('opened');  
    }else{
	$('#text25_nahled').addClass('opened');
    }if($('.text25_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text25_popis').addClass('closed') } });
    }
  });		
	

$('#program').on('click', '#text26_nahled', function(){
    var $text26_popis =  $(this).siblings('.text26_popis');
    if($text26_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text26_popis.velocity("slideDown", { duration: 800, complete: function() { $text26_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text26_popis').addClass('closed') } });
    }
  });

   $('#text26_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text26').click(function () {
    if($('#text26_nahled').hasClass('opened'))
    {
      $('#text26_nahled').removeClass('opened');  
    }else{
	$('#text26_nahled').addClass('opened');
    }if($('.text26_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text26_popis').addClass('closed') } });
    }
  });		
	
	
	

$('#program').on('click', '#text27_nahled', function(){
    var $text27_popis =  $(this).siblings('.text27_popis');
    if($text27_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text27_popis.velocity("slideDown", { duration: 800, complete: function() { $text27_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text27_popis').addClass('closed') } });
    }
  });

   $('#text27_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text27').click(function () {
    if($('#text27_nahled').hasClass('opened'))
    {
      $('#text27_nahled').removeClass('opened');  
    }else{
	$('#text27_nahled').addClass('opened');
    }if($('.text27_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text27_popis').addClass('closed') } });
    }
  });		
	
	
	
	
$('#program').on('click', '#text28_nahled', function(){
    var $text28_popis =  $(this).siblings('.text28_popis');
    if($text28_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text28_popis.velocity("slideDown", { duration: 800, complete: function() { $text28_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text28_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text28_popis').addClass('closed') } });
    }
  });

   $('#text28_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text28').click(function () {
    if($('#text28_nahled').hasClass('opened'))
    {
      $('#text28_nahled').removeClass('opened');  
    }else{
	$('#text28_nahled').addClass('opened');
    }if($('.text28_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text28_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text28_popis').addClass('closed') } });
    }
  });		
	
	
	
	
$('#program').on('click', '#text29_nahled', function(){
    var $text29_popis =  $(this).siblings('.text29_popis');
    if($text29_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $text29_popis.velocity("slideDown", { duration: 800, complete: function() { $text29_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top +0   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text29_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text29_popis').addClass('closed') } });
    }
  });

   $('#text29_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_text29').click(function () {
    if($('#text29_nahled').hasClass('opened'))
    {
      $('#text29_nahled').removeClass('opened');  
    }else{
	$('#text29_nahled').addClass('opened');
    }if($('.text29_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 100);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.text29_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text29_popis').addClass('closed') } });
    }
  });		
	
	
	
$('#program').on('click', '#projekt70_nahled', function(){
    var $projekt70_popis =  $(this).siblings('.projekt70_popis');
    if($projekt70_popis.hasClass('closed')) 
	{
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt70_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt70_popis.removeClass('closed') } });
    } 

  });
	
   $('#projekt70_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   }); //zčerna při otevreni

 $('.zavrit_projekt70').click(function () {
    if($('#projekt70_nahled').hasClass('opened'))
    {
      $('#projekt70_nahled').removeClass('opened');  
    }else{
	$('#projekt70_nahled').addClass('opened');
    }if($('.projekt70_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt70_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt70_popis').addClass('closed') } });
    }
  });	
	
	
	
	
	
	
	
	

$('#program').on('click', '#projekt71_nahled', function(){
    var $projekt71_popis =  $(this).siblings('.projekt71_popis');
    if($projekt71_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt71_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt71_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt71_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt71_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt71_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt71').click(function () {
    if($('#projekt71_nahled').hasClass('opened'))
    {
      $('#projekt71_nahled').removeClass('opened');  
    }else{
	$('#projekt71_nahled').addClass('opened');
    }if($('.projekt71_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt71_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt71_popis').addClass('closed') } });
    }
  });	
	
	
$('#program').on('click', '#projekt72_nahled', function(){
    var $projekt72_popis =  $(this).siblings('.projekt72_popis');
    if($projekt72_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt72_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt72_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt72_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt72_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt72_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt72').click(function () {
    if($('#projekt72_nahled').hasClass('opened'))
    {
      $('#projekt72_nahled').removeClass('opened');  
    }else{
	$('#projekt72_nahled').addClass('opened');
    }if($('.projekt72_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt72_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt72_popis').addClass('closed') } });
    }
  });		
	
	
	
$('#program').on('click', '#projekt73_nahled', function(){
    var $projekt73_popis =  $(this).siblings('.projekt73_popis');
    if($projekt73_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt73_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt73_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt73_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt73_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt73_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt73').click(function () {
    if($('#projekt73_nahled').hasClass('opened'))
    {
      $('#projekt73_nahled').removeClass('opened');  
    }else{
	$('#projekt73_nahled').addClass('opened');
    }if($('.projekt73_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt73_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt73_popis').addClass('closed') } });
    }
  });	
	

	
$('#program').on('click', '#projekt74_nahled', function(){
    var $projekt74_popis =  $(this).siblings('.projekt74_popis');
    if($projekt74_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt74_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt74_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt74_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt74_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt74_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt74').click(function () {
    if($('#projekt74_nahled').hasClass('opened'))
    {
      $('#projekt74_nahled').removeClass('opened');  
    }else{
	$('#projekt74_nahled').addClass('opened');
    }if($('.projekt74_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt74_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt74_popis').addClass('closed') } });
    }
  });		
	
	
	
$('#program').on('click', '#projekt75_nahled', function(){
    var $projekt75_popis =  $(this).siblings('.projekt75_popis');
    if($projekt75_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt75_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt75_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt75_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt75_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt75_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt75').click(function () {
    if($('#projekt75_nahled').hasClass('opened'))
    {
      $('#projekt75_nahled').removeClass('opened');  
    }else{
	$('#projekt75_nahled').addClass('opened');
    }if($('.projekt75_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt75_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt75_popis').addClass('closed') } });
    }
  });		
	
	
$('#program').on('click', '#projekt76_nahled', function(){
    var $projekt76_popis =  $(this).siblings('.projekt76_popis');
    if($projekt76_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt76_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt76_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt76_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt76_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt76_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt76').click(function () {
    if($('#projekt76_nahled').hasClass('opened'))
    {
      $('#projekt76_nahled').removeClass('opened');  
    }else{
	$('#projekt76_nahled').addClass('opened');
    }if($('.projekt76_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt76_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt76_popis').addClass('closed') } });
    }
  });		
		

$('#program').on('click', '#projekt77_nahled', function(){
    var $projekt77_popis =  $(this).siblings('.projekt77_popis');
    if($projekt77_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt77_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt77_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt77_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt77_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt77_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt77').click(function () {
    if($('#projekt77_nahled').hasClass('opened'))
    {
      $('#projekt77_nahled').removeClass('opened');  
    }else{
	$('#projekt77_nahled').addClass('opened');
    }if($('.projekt77_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt77_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt77_popis').addClass('closed') } });
    }
  });			
	
	
	
$('#program').on('click', '#projekt78_nahled', function(){
    var $projekt78_popis =  $(this).siblings('.projekt78_popis');
    if($projekt78_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt78_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt78_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt78_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt78_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt78_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt78').click(function () {
    if($('#projekt78_nahled').hasClass('opened'))
    {
      $('#projekt78_nahled').removeClass('opened');  
    }else{
	$('#projekt78_nahled').addClass('opened');
    }if($('.projekt78_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt78_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt78_popis').addClass('closed') } });
    }
  });			
	
	
	
	
$('#program').on('click', '#projekt79_nahled', function(){
    var $projekt79_popis =  $(this).siblings('.projekt79_popis');
    if($projekt79_popis.hasClass('closed')) {
    $('html, body').animate({         scrollTop: $(this).offset().top +200   }, 1000);  //-10 zarovnani nahore-o kolik odskoci od horniho okraje
      $projekt79_popis.velocity("slideDown", { duration: 800, complete: function() { $projekt79_popis.removeClass('closed') } });
    } else {
    $('html, body').animate({         scrollTop: $(this).offset().top -4   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt79_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt79_popis').addClass('closed') } });
    } //posune se nahoru az pri klinuti na otevrene okno - pri zavirani
  });	
   $('#projekt79_nahled').click(function () {
    if($(this).hasClass('opened'))
    {
      $(this).removeClass('opened');
     
    }else{
        $(this).addClass('opened');
    }
   });

 $('.zavrit_projekt79').click(function () {
    if($('#projekt79_nahled').hasClass('opened'))
    {
      $('#projekt79_nahled').removeClass('opened');  
    }else{
	$('#projekt79_nahled').addClass('opened');
    }if($('.projekt79_popis').hasClass) {
     $('html, body').animate({         scrollTop: $(this).offset().top -230   }, 1000);  // zatim zbytecne, ale pokud se to ve vysloedne sachovnivi bude hodit - posune pouze o urcity pocet pizelu vzhuru -10 zarovnani nahore-o kolik odskoci od horniho okraje

$('.projekt79_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt79_popis').addClass('closed') } });
    }
  });			
	
		
	
	
	
	
$('#program').on('click', '#medek_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt65_popis').offset().top -230 }, 1000); 
	$('.projekt65_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt65_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt61_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt65_nahled').hasClass('opened')){
$('#projekt65_nahled').removeClass('opened') 
$('.projekt65_popis').addClass('closed') }
$('#projekt61_nahled').addClass('opened')
  if($('#projekt61_nahled').hasClass('opened'))
	$('.projekt61_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt61_popis').removeClass('closed') }})
}})	
})
	

$('#program').on('click', '#medek_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt61_popis').offset().top -230 }, 1000); 
	$('.projekt61_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt61_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt65_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt61_nahled').hasClass('opened')){
$('#projekt61_nahled').removeClass('opened') 
$('.projekt61_popis').addClass('closed') }
$('#projekt65_nahled').addClass('opened')
  if($('#projekt65_nahled').hasClass('opened'))
	$('.projekt65_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt65_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#magni_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt44_popis').offset().top -230 }, 1000); 
	$('.projekt44_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt44_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt45_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt44_nahled').hasClass('opened')){
$('#projekt44_nahled').removeClass('opened') 
$('.projekt44_popis').addClass('closed') }
$('#projekt45_nahled').addClass('opened')
  if($('#projekt45_nahled').hasClass('opened'))
	$('.projekt45_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt45_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#magni_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt45_popis').offset().top -230 }, 1000); 
	$('.projekt45_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt45_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt44_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt45_nahled').hasClass('opened')){
$('#projekt45_nahled').removeClass('opened') 
$('.projekt45_popis').addClass('closed') }
$('#projekt44_nahled').addClass('opened')
  if($('#projekt44_nahled').hasClass('opened'))
	$('.projekt44_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt44_popis').removeClass('closed') }})
}})	
})		
	
	
	
$('#program').on('click', '#horizonty_mlhy', function(){
    $('html, body').animate({ scrollTop: $('.projekt58_popis').offset().top -230 }, 1000); 
	$('.projekt58_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt58_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt34_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt58_nahled').hasClass('opened')){
$('#projekt58_nahled').removeClass('opened') 
$('.projekt58_popis').addClass('closed') }
$('#projekt34_nahled').addClass('opened')
  if($('#projekt34_nahled').hasClass('opened'))
	$('.projekt34_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt34_popis').removeClass('closed') }})
}})	
})		
		
	
$('#program').on('click', '#portret_krajiny', function(){
    $('html, body').animate({ scrollTop: $('.projekt34_popis').offset().top -230 }, 1000); 
	$('.projekt34_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt34_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt58_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt34_nahled').hasClass('opened')){
$('#projekt34_nahled').removeClass('opened') 
$('.projekt34_popis').addClass('closed') }
$('#projekt58_nahled').addClass('opened')
  if($('#projekt58_nahled').hasClass('opened'))
	$('.projekt58_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt58_popis').removeClass('closed') }})
}})	
})			
	
	
	
	
$('#program').on('click', '#stavyma_navigace', function(){
    $('html, body').animate({ scrollTop: $('.projekt59_popis').offset().top -230 }, 1000); 
	$('.projekt59_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt59_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt46_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt59_nahled').hasClass('opened')){
$('#projekt59_nahled').removeClass('opened') 
$('.projekt59_popis').addClass('closed') }
$('#projekt46_nahled').addClass('opened')
  if($('#projekt46_nahled').hasClass('opened'))
	$('.projekt46_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt46_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#stavyma_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt59_popis').offset().top -230 }, 1000); 
	$('.projekt59_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt59_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt47_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt59_nahled').hasClass('opened')){
$('#projekt59_nahled').removeClass('opened') 
$('.projekt59_popis').addClass('closed') }
$('#projekt47_nahled').addClass('opened')
  if($('#projekt47_nahled').hasClass('opened'))
	$('.projekt47_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt47_popis').removeClass('closed') }})
}})	
})		
	
	
	
	
$('#program').on('click', '#stavyma_poutac', function(){
    $('html, body').animate({ scrollTop: $('.projekt46_popis').offset().top -230 }, 1000); 
	$('.projekt46_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt46_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt59_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt46_nahled').hasClass('opened')){
$('#projekt46_nahled').removeClass('opened') 
$('.projekt46_popis').addClass('closed') }
$('#projekt59_nahled').addClass('opened')
  if($('#projekt59_nahled').hasClass('opened'))
	$('.projekt59_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt59_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#stavyma_vizual_2', function(){
    $('html, body').animate({ scrollTop: $('.projekt46_popis').offset().top -230 }, 1000); 
	$('.projekt46_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt46_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt47_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt46_nahled').hasClass('opened')){
$('#projekt46_nahled').removeClass('opened') 
$('.projekt46_popis').addClass('closed') }
$('#projekt47_nahled').addClass('opened')
  if($('#projekt47_nahled').hasClass('opened'))
	$('.projekt47_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt47_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#stavyma_poutac_2', function(){
    $('html, body').animate({ scrollTop: $('.projekt47_popis').offset().top -230 }, 1000); 
	$('.projekt47_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt47_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt59_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt47_nahled').hasClass('opened')){
$('#projekt47_nahled').removeClass('opened') 
$('.projekt47_popis').addClass('closed') }
$('#projekt59_nahled').addClass('opened')
  if($('#projekt59_nahled').hasClass('opened'))
	$('.projekt59_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt59_popis').removeClass('closed') }})
}})	
})		
	

		
$('#program').on('click', '#stavyma_navigace_2', function(){
    $('html, body').animate({ scrollTop: $('.projekt47_popis').offset().top -230 }, 1000); 
	$('.projekt47_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt47_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt46_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt47_nahled').hasClass('opened')){
$('#projekt47_nahled').removeClass('opened') 
$('.projekt47_popis').addClass('closed') }
$('#projekt46_nahled').addClass('opened')
  if($('#projekt46_nahled').hasClass('opened'))
	$('.projekt46_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt46_popis').removeClass('closed') }})
}})	
})		
	
	
$('#program').on('click', '#hayek_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt20_popis').offset().top -230 }, 1000); 
	$('.projekt20_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt20_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt21_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt20_nahled').hasClass('opened')){
$('#projekt20_nahled').removeClass('opened') 
$('.projekt20_popis').addClass('closed') }
$('#projekt21_nahled').addClass('opened')
  if($('#projekt21_nahled').hasClass('opened'))
	$('.projekt21_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt21_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#hayek_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt21_popis').offset().top -230 }, 1000); 
	$('.projekt21_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt21_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt20_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt21_nahled').hasClass('opened')){
$('#projekt21_nahled').removeClass('opened') 
$('.projekt21_popis').addClass('closed') }
$('#projekt20_nahled').addClass('opened')
  if($('#projekt20_nahled').hasClass('opened'))
	$('.projekt20_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt20_popis').removeClass('closed') }})
}})	
})	
	
	
	

$('#program').on('click', '#karpisek_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt24_popis').offset().top -230 }, 1000); 
	$('.projekt24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt24_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt62_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt24_nahled').hasClass('opened')){
$('#projekt24_nahled').removeClass('opened') 
$('.projekt24_popis').addClass('closed') }
$('#projekt62_nahled').addClass('opened')
  if($('#projekt62_nahled').hasClass('opened'))
	$('.projekt62_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt62_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#karpisek_katalog_2', function(){
    $('html, body').animate({ scrollTop: $('.projekt24_popis').offset().top -230 }, 1000); 
	$('.projekt24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt24_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt25_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt24_nahled').hasClass('opened')){
$('#projekt24_nahled').removeClass('opened') 
$('.projekt24_popis').addClass('closed') }
$('#projekt25_nahled').addClass('opened')
  if($('#projekt25_nahled').hasClass('opened'))
	$('.projekt25_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt25_popis').removeClass('closed') }})
}})	
})		

	

	
$('#program').on('click', '#karpisek__katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt25_popis').offset().top -230 }, 1000); 
	$('.projekt25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt25_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt62_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt25_nahled').hasClass('opened')){
$('#projekt25_nahled').removeClass('opened') 
$('.projekt25_popis').addClass('closed') }
$('#projekt62_nahled').addClass('opened')
  if($('#projekt62_nahled').hasClass('opened'))
	$('.projekt62_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt62_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#karpisek_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt25_popis').offset().top -230 }, 1000); 
	$('.projekt25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt25_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt24_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt25_nahled').hasClass('opened')){
$('#projekt25_nahled').removeClass('opened') 
$('.projekt25_popis').addClass('closed') }
$('#projekt24_nahled').addClass('opened')
  if($('#projekt24_nahled').hasClass('opened'))
	$('.projekt24_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt24_popis').removeClass('closed') }})
}})	
})		
	
	
$('#program').on('click', '#karpisek__katalog_2', function(){
    $('html, body').animate({ scrollTop: $('.projekt62_popis').offset().top -230 }, 1000); 
	$('.projekt62_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt62_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt25_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt62_nahled').hasClass('opened')){
$('#projekt62_nahled').removeClass('opened') 
$('.projekt62_popis').addClass('closed') }
$('#projekt25_nahled').addClass('opened')
  if($('#projekt25_nahled').hasClass('opened'))
	$('.projekt25_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt25_popis').removeClass('closed') }})
}})	
})	
		
$('#program').on('click', '#karpisek__vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt62_popis').offset().top -230 }, 1000); 
	$('.projekt62_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt62_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt24_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt62_nahled').hasClass('opened')){
$('#projekt62_nahled').removeClass('opened') 
$('.projekt62_popis').addClass('closed') }
$('#projekt24_nahled').addClass('opened')
  if($('#projekt24_nahled').hasClass('opened'))
	$('.projekt24_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt24_popis').removeClass('closed') }})
}})	
})		
	
	
$('#program').on('click', '#skalicky_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt38_popis').offset().top -230 }, 1000); 
	$('.projekt38_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt38_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt37_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt38_nahled').hasClass('opened')){
$('#projekt38_nahled').removeClass('opened') 
$('.projekt38_popis').addClass('closed') }
$('#projekt37_nahled').addClass('opened')
  if($('#projekt37_nahled').hasClass('opened'))
	$('.projekt37_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt37_popis').removeClass('closed') }})
}})	
})		
	
	
$('#program').on('click', '#skalicky_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt37_popis').offset().top -230 }, 1000); 
	$('.projekt37_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt37_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt38_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt37_nahled').hasClass('opened')){
$('#projekt37_nahled').removeClass('opened') 
$('.projekt37_popis').addClass('closed') }
$('#projekt38_nahled').addClass('opened')
  if($('#projekt38_nahled').hasClass('opened'))
	$('.projekt38_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt38_popis').removeClass('closed') }})
}})	
})		
		
	
$('#program').on('click', '#kusch_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt29_popis').offset().top -230 }, 1000); 
	$('.projekt29_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt29_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt30_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt29_nahled').hasClass('opened')){
$('#projekt29_nahled').removeClass('opened') 
$('.projekt29_popis').addClass('closed') }
$('#projekt30_nahled').addClass('opened')
  if($('#projekt30_nahled').hasClass('opened'))
	$('.projekt30_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt30_popis').removeClass('closed') }})
}})	
})		
		
$('#program').on('click', '#kusch_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt30_popis').offset().top -230 }, 1000); 
	$('.projekt30_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt30_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt29_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt30_nahled').hasClass('opened')){
$('#projekt30_nahled').removeClass('opened') 
$('.projekt30_popis').addClass('closed') }
$('#projekt29_nahled').addClass('opened')
  if($('#projekt29_nahled').hasClass('opened'))
	$('.projekt29_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt29_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#daniel_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt13_popis').offset().top -230 }, 1000); 
	$('.projekt13_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt13_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt14_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt13_nahled').hasClass('opened')){
$('#projekt13_nahled').removeClass('opened') 
$('.projekt13_popis').addClass('closed') }
$('#projekt14_nahled').addClass('opened')
  if($('#projekt14_nahled').hasClass('opened'))
	$('.projekt14_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt14_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#daniel_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt14_popis').offset().top -230 }, 1000); 
	$('.projekt14_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt14_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt13_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt14_nahled').hasClass('opened')){
$('#projekt14_nahled').removeClass('opened') 
$('.projekt14_popis').addClass('closed') }
$('#projekt13_nahled').addClass('opened')
  if($('#projekt13_nahled').hasClass('opened'))
	$('.projekt13_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt13_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#bgb_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt32_popis').offset().top -230 }, 1000); 
	$('.projekt32_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt32_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt33_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt32_nahled').hasClass('opened')){
$('#projekt32_nahled').removeClass('opened') 
$('.projekt32_popis').addClass('closed') }
$('#projekt33_nahled').addClass('opened')
  if($('#projekt33_nahled').hasClass('opened'))
	$('.projekt33_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt33_popis').removeClass('closed') }})
}})	
})			
		
	
$('#program').on('click', '#bgb_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt33_popis').offset().top -230 }, 1000); 
	$('.projekt33_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt33_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt32_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt33_nahled').hasClass('opened')){
$('#projekt33_nahled').removeClass('opened') 
$('.projekt33_popis').addClass('closed') }
$('#projekt32_nahled').addClass('opened')
  if($('#projekt32_nahled').hasClass('opened'))
	$('.projekt32_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt32_popis').removeClass('closed') }})
}})	
})		
	
	
$('#program').on('click', '#zam_poutace', function(){
    $('html, body').animate({ scrollTop: $('.projekt12_popis').offset().top -230 }, 1000); 
	$('.projekt12_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt12_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt60_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt12_nahled').hasClass('opened')){
$('#projekt12_nahled').removeClass('opened') 
$('.projekt12_popis').addClass('closed') }
$('#projekt60_nahled').addClass('opened')
  if($('#projekt60_nahled').hasClass('opened'))
	$('.projekt60_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt60_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#zam_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt60_popis').offset().top -230 }, 1000); 
	$('.projekt60_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt60_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt12_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt60_nahled').hasClass('opened')){
$('#projekt60_nahled').removeClass('opened') 
$('.projekt60_popis').addClass('closed') }
$('#projekt12_nahled').addClass('opened')
  if($('#projekt12_nahled').hasClass('opened'))
	$('.projekt12_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt12_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#upp_expozice', function(){
    $('html, body').animate({ scrollTop: $('.projekt17_popis').offset().top -230 }, 1000); 
	$('.projekt17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt17_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt18_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt17_nahled').hasClass('opened')){
$('#projekt17_nahled').removeClass('opened') 
$('.projekt17_popis').addClass('closed') }
$('#projekt18_nahled').addClass('opened')
  if($('#projekt18_nahled').hasClass('opened'))
	$('.projekt18_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt18_popis').removeClass('closed') }})
}})	
})			
		
$('#program').on('click', '#upp_prezentace_vystava', function(){
    $('html, body').animate({ scrollTop: $('.projekt17_popis').offset().top -230 }, 1000); 
	$('.projekt17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt17_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt18_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt17_nahled').hasClass('opened')){
$('#projekt17_nahled').removeClass('opened') 
$('.projekt17_popis').addClass('closed') }
$('#projekt18_nahled').addClass('opened')
  if($('#projekt18_nahled').hasClass('opened'))
	$('.projekt18_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt18_popis').removeClass('closed') }})
}})	
})			
	
	
$('#program').on('click', '#upp_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt18_popis').offset().top -230 }, 1000); 
	$('.projekt18_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt18_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt17_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt18_nahled').hasClass('opened')){
$('#projekt18_nahled').removeClass('opened') 
$('.projekt18_popis').addClass('closed') }
$('#projekt17_nahled').addClass('opened')
  if($('#projekt17_nahled').hasClass('opened'))
	$('.projekt17_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt17_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#od_mozaika', function(){
    $('html, body').animate({ scrollTop: $('.projekt49_popis').offset().top -230 }, 1000); 
	$('.projekt49_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt49_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt10_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt49_nahled').hasClass('opened')){
$('#projekt49_nahled').removeClass('opened') 
$('.projekt49_popis').addClass('closed') }
$('#projekt10_nahled').addClass('opened')
  if($('#projekt10_nahled').hasClass('opened'))
	$('.projekt10_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt10_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#od_pismo', function(){
    $('html, body').animate({ scrollTop: $('.projekt49_popis').offset().top -230 }, 1000); 
	$('.projekt49_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt49_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt63_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt49_nahled').hasClass('opened')){
$('#projekt49_nahled').removeClass('opened') 
$('.projekt49_popis').addClass('closed') }
$('#projekt63_nahled').addClass('opened')
  if($('#projekt63_nahled').hasClass('opened'))
	$('.projekt63_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt63_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#od_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt49_popis').offset().top -230 }, 1000); 
	$('.projekt49_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt49_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt48_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt49_nahled').hasClass('opened')){
$('#projekt49_nahled').removeClass('opened') 
$('.projekt49_popis').addClass('closed') }
$('#projekt48_nahled').addClass('opened')
  if($('#projekt48_nahled').hasClass('opened'))
	$('.projekt48_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt48_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#od_navigace', function(){
    $('html, body').animate({ scrollTop: $('.projekt10_popis').offset().top -230 }, 1000); 
	$('.projekt10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt10_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt49_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt10_nahled').hasClass('opened')){
$('#projekt10_nahled').removeClass('opened') 
$('.projekt10_popis').addClass('closed') }
$('#projekt49_nahled').addClass('opened')
  if($('#projekt49_nahled').hasClass('opened'))
	$('.projekt49_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt49_popis').removeClass('closed') }})
}})	
})	

$('#program').on('click', '#od__pismo', function(){
    $('html, body').animate({ scrollTop: $('.projekt10_popis').offset().top -230 }, 1000); 
	$('.projekt10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt10_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt63_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt10_nahled').hasClass('opened')){
$('#projekt10_nahled').removeClass('opened') 
$('.projekt10_popis').addClass('closed') }
$('#projekt63_nahled').addClass('opened')
  if($('#projekt63_nahled').hasClass('opened'))
	$('.projekt63_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt63_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#od__vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt10_popis').offset().top -230 }, 1000); 
	$('.projekt10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt10_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt48_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt10_nahled').hasClass('opened')){
$('#projekt10_nahled').removeClass('opened') 
$('.projekt10_popis').addClass('closed') }
$('#projekt48_nahled').addClass('opened')
  if($('#projekt48_nahled').hasClass('opened'))
	$('.projekt48_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt48_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#od__navigace', function(){
    $('html, body').animate({ scrollTop: $('.projekt63_popis').offset().top -230 }, 1000); 
	$('.projekt63_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt63_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt49_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt63_nahled').hasClass('opened')){
$('#projekt63_nahled').removeClass('opened') 
$('.projekt63_popis').addClass('closed') }
$('#projekt49_nahled').addClass('opened')
  if($('#projekt49_nahled').hasClass('opened'))
	$('.projekt49_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt49_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#od__mozaika', function(){
    $('html, body').animate({ scrollTop: $('.projekt63_popis').offset().top -230 }, 1000); 
	$('.projekt63_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt63_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt10_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt63_nahled').hasClass('opened')){
$('#projekt63_nahled').removeClass('opened') 
$('.projekt63_popis').addClass('closed') }
$('#projekt10_nahled').addClass('opened')
  if($('#projekt10_nahled').hasClass('opened'))
	$('.projekt10_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt10_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#od___vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt63_popis').offset().top -230 }, 1000); 
	$('.projekt63_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt63_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt48_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt63_nahled').hasClass('opened')){
$('#projekt63_nahled').removeClass('opened') 
$('.projekt63_popis').addClass('closed') }
$('#projekt48_nahled').addClass('opened')
  if($('#projekt48_nahled').hasClass('opened'))
	$('.projekt48_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt48_popis').removeClass('closed') }})
}})	
})	
		
$('#program').on('click', '#od___navigace', function(){
    $('html, body').animate({ scrollTop: $('.projekt48_popis').offset().top -230 }, 1000); 
	$('.projekt48_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt48_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt49_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt48_nahled').hasClass('opened')){
$('#projekt48_nahled').removeClass('opened') 
$('.projekt48_popis').addClass('closed') }
$('#projekt49_nahled').addClass('opened')
  if($('#projekt49_nahled').hasClass('opened'))
	$('.projekt49_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt49_popis').removeClass('closed') }})
}})	
})	
		
$('#program').on('click', '#od___mozaika', function(){
    $('html, body').animate({ scrollTop: $('.projekt48_popis').offset().top -230 }, 1000); 
	$('.projekt48_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt48_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt10_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt48_nahled').hasClass('opened')){
$('#projekt48_nahled').removeClass('opened') 
$('.projekt48_popis').addClass('closed') }
$('#projekt10_nahled').addClass('opened')
  if($('#projekt10_nahled').hasClass('opened'))
	$('.projekt10_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt10_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#od___pismo', function(){
    $('html, body').animate({ scrollTop: $('.projekt48_popis').offset().top -230 }, 1000); 
	$('.projekt48_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt48_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt63_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt48_nahled').hasClass('opened')){
$('#projekt48_nahled').removeClass('opened') 
$('.projekt48_popis').addClass('closed') }
$('#projekt63_nahled').addClass('opened')
  if($('#projekt63_nahled').hasClass('opened'))
	$('.projekt63_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt63_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#os1', function(){
    $('html, body').animate({ scrollTop: $('.projekt40_popis').offset().top -230 }, 1000); 
	$('.projekt40_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt40_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt40_nahled').hasClass('opened')){
$('#projekt40_nahled').removeClass('opened') 
$('.projekt40_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})	
		
$('#program').on('click', '#os2', function(){
    $('html, body').animate({ scrollTop: $('.projekt40_popis').offset().top -230 }, 1000); 
	$('.projekt40_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt40_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt51_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt40_nahled').hasClass('opened')){
$('#projekt40_nahled').removeClass('opened') 
$('.projekt40_popis').addClass('closed') }
$('#projekt51_nahled').addClass('opened')
  if($('#projekt51_nahled').hasClass('opened'))
	$('.projekt51_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt51_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#upp_prezentace_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt17_popis').offset().top -230 }, 1000); 
	$('.projekt17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt17_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text8_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt17_nahled').hasClass('opened')){
$('#projekt17_nahled').removeClass('opened') 
$('.projekt17_popis').addClass('closed') }
$('#text8_nahled').addClass('opened')
  if($('#text8_nahled').hasClass('opened'))
	$('.text8_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text8_popis').removeClass('closed') }})
}})	
})	
	
	
	
$('#program').on('click', '#os_1', function(){
    $('html, body').animate({ scrollTop: $('.projekt51_popis').offset().top -230 }, 1000); 
	$('.projekt51_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt51_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt51_nahled').hasClass('opened')){
$('#projekt51_nahled').removeClass('opened') 
$('.projekt51_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os3', function(){
    $('html, body').animate({ scrollTop: $('.projekt51_popis').offset().top -230 }, 1000); 
	$('.projekt51_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt51_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt40_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt51_nahled').hasClass('opened')){
$('#projekt51_nahled').removeClass('opened') 
$('.projekt51_popis').addClass('closed') }
$('#projekt40_nahled').addClass('opened')
  if($('#projekt40_nahled').hasClass('opened'))
	$('.projekt40_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt40_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#os_2', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt51_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#projekt51_nahled').addClass('opened')
  if($('#projekt51_nahled').hasClass('opened'))
	$('.projekt51_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt51_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os_3', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt40_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#projekt40_nahled').addClass('opened')
  if($('#projekt40_nahled').hasClass('opened'))
	$('.projekt40_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt40_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#ncsd15_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt56_popis').offset().top -230 }, 1000); 
	$('.projekt56_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt56_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt55_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt56_nahled').hasClass('opened')){
$('#projekt56_nahled').removeClass('opened') 
$('.projekt56_popis').addClass('closed') }
$('#projekt55_nahled').addClass('opened')
  if($('#projekt55_nahled').hasClass('opened'))
	$('.projekt55_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt55_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd15_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt56_popis').offset().top -230 }, 1000); 
	$('.projekt56_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt56_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt26_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt56_nahled').hasClass('opened')){
$('#projekt56_nahled').removeClass('opened') 
$('.projekt56_popis').addClass('closed') }
$('#projekt26_nahled').addClass('opened')
  if($('#projekt26_nahled').hasClass('opened'))
	$('.projekt26_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt26_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd14_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt56_popis').offset().top -230 }, 1000); 
	$('.projekt56_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt56_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt43_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt56_nahled').hasClass('opened')){
$('#projekt56_nahled').removeClass('opened') 
$('.projekt56_popis').addClass('closed') }
$('#projekt43_nahled').addClass('opened')
  if($('#projekt43_nahled').hasClass('opened'))
	$('.projekt43_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt43_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd14_katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt56_popis').offset().top -230 }, 1000); 
	$('.projekt56_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt56_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt27_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt56_nahled').hasClass('opened')){
$('#projekt56_nahled').removeClass('opened') 
$('.projekt56_popis').addClass('closed') }
$('#projekt27_nahled').addClass('opened')
  if($('#projekt27_nahled').hasClass('opened'))
	$('.projekt27_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt27_popis').removeClass('closed') }})
}})	
})		
		
$('#program').on('click', '#ncsd15_25_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt55_popis').offset().top -230 }, 1000); 
	$('.projekt55_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt55_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt56_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt55_nahled').hasClass('opened')){
$('#projekt55_nahled').removeClass('opened') 
$('.projekt55_popis').addClass('closed') }
$('#projekt56_nahled').addClass('opened')
  if($('#projekt56_nahled').hasClass('opened'))
	$('.projekt56_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt56_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd15__katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt55_popis').offset().top -230 }, 1000); 
	$('.projekt55_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt55_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt26_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt55_nahled').hasClass('opened')){
$('#projekt55_nahled').removeClass('opened') 
$('.projekt55_popis').addClass('closed') }
$('#projekt26_nahled').addClass('opened')
  if($('#projekt26_nahled').hasClass('opened'))
	$('.projekt26_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt26_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#ncsd14__vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt55_popis').offset().top -230 }, 1000); 
	$('.projekt55_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt55_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt43_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt55_nahled').hasClass('opened')){
$('#projekt55_nahled').removeClass('opened') 
$('.projekt55_popis').addClass('closed') }
$('#projekt43_nahled').addClass('opened')
  if($('#projekt43_nahled').hasClass('opened'))
	$('.projekt43_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt43_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd14__katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt55_popis').offset().top -230 }, 1000); 
	$('.projekt55_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt55_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt27_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt55_nahled').hasClass('opened')){
$('#projekt55_nahled').removeClass('opened') 
$('.projekt55_popis').addClass('closed') }
$('#projekt27_nahled').addClass('opened')
  if($('#projekt27_nahled').hasClass('opened'))
	$('.projekt27_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt27_popis').removeClass('closed') }})
}})	
})		


$('#program').on('click', '#ncsd15___25_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt26_popis').offset().top -230 }, 1000); 
	$('.projekt26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt26_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt56_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt26_nahled').hasClass('opened')){
$('#projekt26_nahled').removeClass('opened') 
$('.projekt26_popis').addClass('closed') }
$('#projekt56_nahled').addClass('opened')
  if($('#projekt56_nahled').hasClass('opened'))
	$('.projekt56_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt56_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd15___vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt26_popis').offset().top -230 }, 1000); 
	$('.projekt26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt26_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt55_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt26_nahled').hasClass('opened')){
$('#projekt26_nahled').removeClass('opened') 
$('.projekt26_popis').addClass('closed') }
$('#projekt55_nahled').addClass('opened')
  if($('#projekt55_nahled').hasClass('opened'))
	$('.projekt55_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt55_popis').removeClass('closed') }})
}})	
})		
		
$('#program').on('click', '#ncsd14____vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt26_popis').offset().top -230 }, 1000); 
	$('.projekt26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt26_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt43_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt26_nahled').hasClass('opened')){
$('#projekt26_nahled').removeClass('opened') 
$('.projekt26_popis').addClass('closed') }
$('#projekt43_nahled').addClass('opened')
  if($('#projekt43_nahled').hasClass('opened'))
	$('.projekt43_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt43_popis').removeClass('closed') }})
}})	
})			

$('#program').on('click', '#ncsd14____katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt26_popis').offset().top -230 }, 1000); 
	$('.projekt26_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt26_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt27_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt26_nahled').hasClass('opened')){
$('#projekt26_nahled').removeClass('opened') 
$('.projekt26_popis').addClass('closed') }
$('#projekt27_nahled').addClass('opened')
  if($('#projekt27_nahled').hasClass('opened'))
	$('.projekt27_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt27_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd15__25_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt43_popis').offset().top -230 }, 1000); 
	$('.projekt43_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt43_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt56_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt43_nahled').hasClass('opened')){
$('#projekt43_nahled').removeClass('opened') 
$('.projekt43_popis').addClass('closed') }
$('#projekt56_nahled').addClass('opened')
  if($('#projekt56_nahled').hasClass('opened'))
	$('.projekt56_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt56_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd15__vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt43_popis').offset().top -230 }, 1000); 
	$('.projekt43_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt43_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt55_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt43_nahled').hasClass('opened')){
$('#projekt43_nahled').removeClass('opened') 
$('.projekt43_popis').addClass('closed') }
$('#projekt55_nahled').addClass('opened')
  if($('#projekt55_nahled').hasClass('opened'))
	$('.projekt55_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt55_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd15___katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt43_popis').offset().top -230 }, 1000); 
	$('.projekt43_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt43_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt26_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt43_nahled').hasClass('opened')){
$('#projekt43_nahled').removeClass('opened') 
$('.projekt43_popis').addClass('closed') }
$('#projekt26_nahled').addClass('opened')
  if($('#projekt26_nahled').hasClass('opened'))
	$('.projekt26_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt26_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd14___katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt43_popis').offset().top -230 }, 1000); 
	$('.projekt43_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt43_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt27_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt43_nahled').hasClass('opened')){
$('#projekt43_nahled').removeClass('opened') 
$('.projekt43_popis').addClass('closed') }
$('#projekt27_nahled').addClass('opened')
  if($('#projekt27_nahled').hasClass('opened'))
	$('.projekt27_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt27_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd15____25_vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt27_popis').offset().top -230 }, 1000); 
	$('.projekt27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt27_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt56_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt27_nahled').hasClass('opened')){
$('#projekt27_nahled').removeClass('opened') 
$('.projekt27_popis').addClass('closed') }
$('#projekt56_nahled').addClass('opened')
  if($('#projekt56_nahled').hasClass('opened'))
	$('.projekt56_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt56_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd15____vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt27_popis').offset().top -230 }, 1000); 
	$('.projekt27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt27_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt55_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt27_nahled').hasClass('opened')){
$('#projekt27_nahled').removeClass('opened') 
$('.projekt27_popis').addClass('closed') }
$('#projekt55_nahled').addClass('opened')
  if($('#projekt55_nahled').hasClass('opened'))
	$('.projekt55_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt55_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd15____katalog', function(){
    $('html, body').animate({ scrollTop: $('.projekt27_popis').offset().top -230 }, 1000); 
	$('.projekt27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt27_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt26_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt27_nahled').hasClass('opened')){
$('#projekt27_nahled').removeClass('opened') 
$('.projekt27_popis').addClass('closed') }
$('#projekt26_nahled').addClass('opened')
  if($('#projekt26_nahled').hasClass('opened'))
	$('.projekt26_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt26_popis').removeClass('closed') }})
}})	
})			
		
$('#program').on('click', '#ncsd14___vizual', function(){
    $('html, body').animate({ scrollTop: $('.projekt27_popis').offset().top -230 }, 1000); 
	$('.projekt27_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt27_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt43_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt27_nahled').hasClass('opened')){
$('#projekt27_nahled').removeClass('opened') 
$('.projekt27_popis').addClass('closed') }
$('#projekt43_nahled').addClass('opened')
  if($('#projekt43_nahled').hasClass('opened'))
	$('.projekt43_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt43_popis').removeClass('closed') }})
}})	
})			
			
	
$('#program').on('click', '#plakat_nyc', function(){
    $('html, body').animate({ scrollTop: $('.text2_popis').offset().top -230 }, 1000); 
	$('.text2_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text2_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt5_nahled').offset().top +200 }, 1000);  		  
  if($('#text2_nahled').hasClass('opened')){
$('#text2_nahled').removeClass('opened') 
$('.text2_popis').addClass('closed') }
$('#projekt5_nahled').addClass('opened')
  if($('#projekt5_nahled').hasClass('opened'))
	$('.projekt5_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt5_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#prezentace_nyc', function(){
    $('html, body').animate({ scrollTop: $('.projekt5_popis').offset().top -230 }, 1000); 
	$('.projekt5_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt5_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text2_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt5_nahled').hasClass('opened')){
$('#projekt5_nahled').removeClass('opened') 
$('.projekt5_popis').addClass('closed') }
$('#text2_nahled').addClass('opened')
  if($('#text2_nahled').hasClass('opened'))
	$('.text2_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text2_popis').removeClass('closed') }})
}})	
})			
		
	
	
	
	
$('#program').on('click', '#fenomen_kniha', function(){
    $('html, body').animate({ scrollTop: $('.projekt11_popis').offset().top -230 }, 1000); 
	$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text3_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt11_nahled').hasClass('opened')){
$('#projekt11_nahled').removeClass('opened') 
$('.projekt11_popis').addClass('closed') }
$('#text3_nahled').addClass('opened')
  if($('#text3_nahled').hasClass('opened'))
	$('.text3_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text3_popis').removeClass('closed') }})
}})	
})

$('#program').on('click', '#ncsd_z', function(){
    $('html, body').animate({ scrollTop: $('.projekt11_popis').offset().top -230 }, 1000); 
	$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text4_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt11_nahled').hasClass('opened')){
$('#projekt11_nahled').removeClass('opened') 
$('.projekt11_popis').addClass('closed') }
$('#text4_nahled').addClass('opened')
  if($('#text4_nahled').hasClass('opened'))
	$('.text4_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text4_popis').removeClass('closed') }})
}})	
})	

$('#program').on('click', '#cgd_z', function(){
    $('html, body').animate({ scrollTop: $('.projekt11_popis').offset().top -230 }, 1000); 
	$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text24_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt11_nahled').hasClass('opened')){
$('#projekt11_nahled').removeClass('opened') 
$('.projekt11_popis').addClass('closed') }
$('#text24_nahled').addClass('opened')
  if($('#text24_nahled').hasClass('opened'))
	$('.text24_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text24_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#z_vystavy', function(){
    $('html, body').animate({ scrollTop: $('.projekt11_popis').offset().top -230 }, 1000); 
	$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text6_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt11_nahled').hasClass('opened')){
$('#projekt11_nahled').removeClass('opened') 
$('.projekt11_popis').addClass('closed') }
$('#text6_nahled').addClass('opened')
  if($('#text6_nahled').hasClass('opened'))
	$('.text6_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text6_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#z_media', function(){
    $('html, body').animate({ scrollTop: $('.projekt11_popis').offset().top -230 }, 1000); 
	$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text5_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt11_nahled').hasClass('opened')){
$('#projekt11_nahled').removeClass('opened') 
$('.projekt11_popis').addClass('closed') }
$('#text5_nahled').addClass('opened')
  if($('#text5_nahled').hasClass('opened'))
	$('.text5_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text5_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#upp__vizual', function(){
    $('html, body').animate({ scrollTop: $('.text8_popis').offset().top -230 }, 1000); 
	$('.text8_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text8_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt17_nahled').offset().top +200 }, 1000);  		  
  if($('#text8_nahled').hasClass('opened')){
$('#text8_nahled').removeClass('opened') 
$('.text8_popis').addClass('closed') }
$('#projekt17_nahled').addClass('opened')
  if($('#projekt17_nahled').hasClass('opened'))
	$('.projekt17_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt17_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#upp__expozice', function(){
    $('html, body').animate({ scrollTop: $('.text8_popis').offset().top -230 }, 1000); 
	$('.text8_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text8_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt18_nahled').offset().top +200 }, 1000);  		  
  if($('#text8_nahled').hasClass('opened')){
$('#text8_nahled').removeClass('opened') 
$('.text8_popis').addClass('closed') }
$('#projekt18_nahled').addClass('opened')
  if($('#projekt18_nahled').hasClass('opened'))
	$('.projekt18_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt18_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#z_1', function(){
    $('html, body').animate({ scrollTop: $('.text3_popis').offset().top -230 }, 1000); 
	$('.text3_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text3_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text3_nahled').hasClass('opened')){
$('#text3_nahled').removeClass('opened') 
$('.text3_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#z_2', function(){
    $('html, body').animate({ scrollTop: $('.text4_popis').offset().top -230 }, 1000); 
	$('.text4_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text4_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text4_nahled').hasClass('opened')){
$('#text4_nahled').removeClass('opened') 
$('.text4_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#z_3', function(){
    $('html, body').animate({ scrollTop: $('.text24_popis').offset().top -230 }, 1000); 
	$('.text24_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text24_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text24_nahled').hasClass('opened')){
$('#text24_nahled').removeClass('opened') 
$('.text24_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#z_4', function(){
    $('html, body').animate({ scrollTop: $('.text5_popis').offset().top -230 }, 1000); 
	$('.text5_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text5_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text5_nahled').hasClass('opened')){
$('#text5_nahled').removeClass('opened') 
$('.text5_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#z_5', function(){
    $('html, body').animate({ scrollTop: $('.text6_popis').offset().top -230 }, 1000); 
	$('.text6_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text6_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text6_nahled').hasClass('opened')){
$('#text6_nahled').removeClass('opened') 
$('.text6_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})			

$('#program').on('click', '#china', function(){
    $('html, body').animate({ scrollTop: $('.text1_popis').offset().top -230 }, 1000); 
	$('.text1_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text1_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt2_nahled').offset().top +200 }, 1000);  		  
  if($('#text1_nahled').hasClass('opened')){
$('#text1_nahled').removeClass('opened') 
$('.text1_popis').addClass('closed') }
$('#projekt2_nahled').addClass('opened')
  if($('#projekt2_nahled').hasClass('opened'))
	$('.projekt2_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt2_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#vb2011', function(){
    $('html, body').animate({ scrollTop: $('.projekt2_popis').offset().top -230 }, 1000); 
	$('.projekt2_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt2_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text1_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt2_nahled').hasClass('opened')){
$('#projekt2_nahled').removeClass('opened') 
$('.projekt2_popis').addClass('closed') }
$('#text1_nahled').addClass('opened')
  if($('#text1_nahled').hasClass('opened'))
	$('.text1_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text1_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd14_vizual_', function(){
    $('html, body').animate({ scrollTop: $('.projekt52_popis').offset().top -230 }, 1000); 
	$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt43_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt52_nahled').hasClass('opened')){
$('#projekt52_nahled').removeClass('opened') 
$('.projekt52_popis').addClass('closed') }
$('#projekt43_nahled').addClass('opened')
  if($('#projekt43_nahled').hasClass('opened'))
	$('.projekt43_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt43_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd14_katalog_', function(){
    $('html, body').animate({ scrollTop: $('.projekt52_popis').offset().top -230 }, 1000); 
	$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt27_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt52_nahled').hasClass('opened')){
$('#projekt52_nahled').removeClass('opened') 
$('.projekt52_popis').addClass('closed') }
$('#projekt27_nahled').addClass('opened')
  if($('#projekt27_nahled').hasClass('opened'))
	$('.projekt27_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt27_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd15_katalog_', function(){
    $('html, body').animate({ scrollTop: $('.projekt52_popis').offset().top -230 }, 1000); 
	$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt26_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt52_nahled').hasClass('opened')){
$('#projekt52_nahled').removeClass('opened') 
$('.projekt52_popis').addClass('closed') }
$('#projekt26_nahled').addClass('opened')
  if($('#projekt26_nahled').hasClass('opened'))
	$('.projekt26_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt26_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd15_vizual_', function(){
    $('html, body').animate({ scrollTop: $('.projekt52_popis').offset().top -230 }, 1000); 
	$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt55_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt52_nahled').hasClass('opened')){
$('#projekt52_nahled').removeClass('opened') 
$('.projekt52_popis').addClass('closed') }
$('#projekt55_nahled').addClass('opened')
  if($('#projekt55_nahled').hasClass('opened'))
	$('.projekt55_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt55_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#ncsd15_vizual_25', function(){
    $('html, body').animate({ scrollTop: $('.projekt52_popis').offset().top -230 }, 1000); 
	$('.projekt52_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt52_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt56_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt52_nahled').hasClass('opened')){
$('#projekt52_nahled').removeClass('opened') 
$('.projekt52_popis').addClass('closed') }
$('#projekt56_nahled').addClass('opened')
  if($('#projekt56_nahled').hasClass('opened'))
	$('.projekt56_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt56_popis').removeClass('closed') }})
}})	
})
	
$('#program').on('click', '#z_6', function(){
    $('html, body').animate({ scrollTop: $('.text21_popis').offset().top -230 }, 1000); 
	$('.text21_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text21_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text21_nahled').hasClass('opened')){
$('#text21_nahled').removeClass('opened') 
$('.text21_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#z_ellia', function(){
    $('html, body').animate({ scrollTop: $('.projekt11_popis').offset().top -230 }, 1000); 
	$('.projekt11_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt11_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text21_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt11_nahled').hasClass('opened')){
$('#projekt11_nahled').removeClass('opened') 
$('.projekt11_popis').addClass('closed') }
$('#text21_nahled').addClass('opened')
  if($('#text21_nahled').hasClass('opened'))
	$('.text21_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text21_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os__1', function(){
    $('html, body').animate({ scrollTop: $('.text22_popis').offset().top -230 }, 1000); 
	$('.text22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text22_nahled').hasClass('opened')){
$('#text22_nahled').removeClass('opened') 
$('.text22_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#ncsd_os', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text22_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#text22_nahled').addClass('opened')
  if($('#text22_nahled').hasClass('opened'))
	$('.text22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text22_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#media_os', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text23_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#text23_nahled').addClass('opened')
  if($('#text23_nahled').hasClass('opened'))
	$('.text23_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text23_popis').removeClass('closed') }})
}})	
})			
	
$('#program').on('click', '#os__2', function(){
    $('html, body').animate({ scrollTop: $('.text23_popis').offset().top -230 }, 1000); 
	$('.text23_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text23_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text23_nahled').hasClass('opened')){
$('#text23_nahled').removeClass('opened') 
$('.text23_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#os__3', function(){
    $('html, body').animate({ scrollTop: $('.text20_popis').offset().top -230 }, 1000); 
	$('.text20_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text20_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text23_nahled').hasClass('opened')){
$('#text20_nahled').removeClass('opened') 
$('.text20_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#gp_os', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text20_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#text20_nahled').addClass('opened')
  if($('#text20_nahled').hasClass('opened'))
	$('.text20_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text20_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#os__4', function(){
    $('html, body').animate({ scrollTop: $('.text18_popis').offset().top -230 }, 1000); 
	$('.text18_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text18_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text18_nahled').hasClass('opened')){
$('#text18_nahled').removeClass('opened') 
$('.text18_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os__5', function(){
    $('html, body').animate({ scrollTop: $('.text14_popis').offset().top -230 }, 1000); 
	$('.text14_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text14_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text14_nahled').hasClass('opened')){
$('#text14_nahled').removeClass('opened') 
$('.text14_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os__6', function(){
    $('html, body').animate({ scrollTop: $('.text7_popis').offset().top -230 }, 1000); 
	$('.text7_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text7_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text18_nahled').hasClass('opened')){
$('#text7_nahled').removeClass('opened') 
$('.text7_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os__7', function(){
    $('html, body').animate({ scrollTop: $('.text9_popis').offset().top -230 }, 1000); 
	$('.text9_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text9_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text18_nahled').hasClass('opened')){
$('#text9_nahled').removeClass('opened') 
$('.text9_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#pk', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text9_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#text9_nahled').addClass('opened')
  if($('#text9_nahled').hasClass('opened'))
	$('.text9_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text9_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os__8', function(){
    $('html, body').animate({ scrollTop: $('.text10_popis').offset().top -230 }, 1000); 
	$('.text10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text10_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text10_nahled').hasClass('opened')){
$('#text10_nahled').removeClass('opened') 
$('.text10_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#os__10', function(){
    $('html, body').animate({ scrollTop: $('.text25_popis').offset().top -230 }, 1000); 
	$('.text25_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text25_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text25_nahled').hasClass('opened')){
$('#text25_nahled').removeClass('opened') 
$('.text25_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#z_7', function(){
    $('html, body').animate({ scrollTop: $('.text10_popis').offset().top -230 }, 1000); 
	$('.text10_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text10_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt11_nahled').offset().top +200 }, 1000);  		  
  if($('#text10_nahled').hasClass('opened')){
$('#text10_nahled').removeClass('opened') 
$('.text10_popis').addClass('closed') }
$('#projekt11_nahled').addClass('opened')
  if($('#projekt11_nahled').hasClass('opened'))
	$('.projekt11_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt11_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os__9', function(){
    $('html, body').animate({ scrollTop: $('.text17_popis').offset().top -230 }, 1000); 
	$('.text17_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text17_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt22_nahled').offset().top +200 }, 1000);  		  
  if($('#text17_nahled').hasClass('opened')){
$('#text17_nahled').removeClass('opened') 
$('.text17_popis').addClass('closed') }
$('#projekt22_nahled').addClass('opened')
  if($('#projekt22_nahled').hasClass('opened'))
	$('.projekt22_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt22_popis').removeClass('closed') }})
}})	
})		

$('#program').on('click', '#magni__katalog', function(){
    $('html, body').animate({ scrollTop: $('.text12_popis').offset().top -230 }, 1000); 
	$('.text12_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text12_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt45_nahled').offset().top +200 }, 1000);  		  
  if($('#text12_nahled').hasClass('opened')){
$('#text12_nahled').removeClass('opened') 
$('.text12_popis').addClass('closed') }
$('#projekt45_nahled').addClass('opened')
  if($('#projekt45_nahled').hasClass('opened'))
	$('.projekt45_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt45_popis').removeClass('closed') }})
}})	
})		
	
$('#program').on('click', '#os_bip', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text10_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#text10_nahled').addClass('opened')
  if($('#text10_nahled').hasClass('opened'))
	$('.text10_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text10_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#os_cgd', function(){
    $('html, body').animate({ scrollTop: $('.projekt22_popis').offset().top -230 }, 1000); 
	$('.projekt22_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt22_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text25_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt22_nahled').hasClass('opened')){
$('#projekt22_nahled').removeClass('opened') 
$('.projekt22_popis').addClass('closed') }
$('#text25_nahled').addClass('opened')
  if($('#text25_nahled').hasClass('opened'))
	$('.text25_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text25_popis').removeClass('closed') }})
}})	
})	
	
$('#program').on('click', '#el_workshop', function(){
    $('html, body').animate({ scrollTop: $('.projekt16_popis').offset().top -230 }, 1000); 
	$('.projekt16_popis').velocity("slideUp", { duration: 800, complete: function() { $('.projekt16_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#text15_nahled').offset().top +200 }, 1000);  		  
  if($('#projekt16_nahled').hasClass('opened')){
$('#projekt16_nahled').removeClass('opened') 
$('.projekt16_popis').addClass('closed') }
$('#text15_nahled').addClass('opened')
  if($('#text15_nahled').hasClass('opened'))
	$('.text15_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.text15_popis').removeClass('closed') }})
}})	
})	
	
	
$('#program').on('click', '#el_plakat', function(){
    $('html, body').animate({ scrollTop: $('.text15_popis').offset().top -230 }, 1000); 
	$('.text15_popis').velocity("slideUp", { duration: 800, complete: function() { $('.text15_popis').addClass('closed')
	$('html, body').animate({ scrollTop: $('#projekt16_nahled').offset().top +200 }, 1000);  		  
  if($('#text15_nahled').hasClass('opened')){
$('#text15_nahled').removeClass('opened') 
$('.text15_popis').addClass('closed') }
$('#projekt16_nahled').addClass('opened')
  if($('#projekt16_nahled').hasClass('opened'))
	$('.projekt16_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt16_popis').removeClass('closed') }})
}})	
})			

	
	
$('#sec1').on('click', '#odkaz_kv', function(){
$('html, body').animate({ scrollTop: $('#projekt36_nahled').offset().top +200 }, 1000);  		  
$('#projekt36_nahled').addClass('opened')
if($('#projekt36_nahled').hasClass('opened'))
	$('.projekt36_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt36_popis').removeClass('closed') }})
})	
	
$('#sec1').on('click', '#odkaz_kv2', function(){
$('html, body').animate({ scrollTop: $('#projekt36_nahled').offset().top +200 }, 1000);  		  
$('#projekt36_nahled').addClass('opened')
if($('#projekt36_nahled').hasClass('opened'))
	$('.projekt36_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt36_popis').removeClass('closed') }})
})		
	
$('#sec1').on('click', '#odkaz_ir', function(){
$('html, body').animate({ scrollTop: $('#projekt34_nahled').offset().top +200 }, 1000);  		  
$('#projekt34_nahled').addClass('opened')
if($('#projekt34_nahled').hasClass('opened'))
	$('.projekt34_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt34_popis').removeClass('closed') }})
})	

$('#sec1').on('click', '#odkaz_ir2', function(){
$('html, body').animate({ scrollTop: $('#projekt34_nahled').offset().top +200 }, 1000);  		  
$('#projekt34_nahled').addClass('opened')
if($('#projekt34_nahled').hasClass('opened'))
	$('.projekt34_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt34_popis').removeClass('closed') }})
})		
	
$('#sec1').on('click', '#odkaz_up1', function(){
$('html, body').animate({ scrollTop: $('#projekt17_nahled').offset().top +200 }, 1000);  		  
$('#projekt17_nahled').addClass('opened')
if($('#projekt17_nahled').hasClass('opened'))
	$('.projekt17_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt17_popis').removeClass('closed') }})
})		
	
$('#sec1').on('click', '#odkaz_up2', function(){
$('html, body').animate({ scrollTop: $('#projekt17_nahled').offset().top +200 }, 1000);  		  
$('#projekt17_nahled').addClass('opened')
if($('#projekt17_nahled').hasClass('opened'))
	$('.projekt17_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt17_popis').removeClass('closed') }})
})	
	
$('#sec1').on('click', '#odkaz_os', function(){
$('html, body').animate({ scrollTop: $('#projekt51_nahled').offset().top +200 }, 1000);  		  
$('#projekt51_nahled').addClass('opened')
if($('#projekt51_nahled').hasClass('opened'))
	$('.projekt51_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt51_popis').removeClass('closed') }})
})		
	
$('#sec1').on('click', '#odkaz_ol1', function(){
$('html, body').animate({ scrollTop: $('#projekt57_nahled').offset().top +200 }, 1000);  		  
$('#projekt57_nahled').addClass('opened')
if($('#projekt57_nahled').hasClass('opened'))
	$('.projekt57_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt57_popis').removeClass('closed') }})
})		
	
$('#sec1').on('click', '#odkaz_ol2', function(){
$('html, body').animate({ scrollTop: $('#projekt57_nahled').offset().top +200 }, 1000);  		  
$('#projekt57_nahled').addClass('opened')
if($('#projekt57_nahled').hasClass('opened'))
	$('.projekt57_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt57_popis').removeClass('closed') }})
})				
	
$('#sec2').on('click', '#odkaz_up3', function(){
$('html, body').animate({ scrollTop: $('#projekt18_nahled').offset().top +200 }, 1000);  		  
$('#projekt18_nahled').addClass('opened')
if($('#projekt18_nahled').hasClass('opened'))
	$('.projekt18_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt18_popis').removeClass('closed') }})
})		
	
$('#sec2').on('click', '#odkaz_up4', function(){
$('html, body').animate({ scrollTop: $('#projekt18_nahled').offset().top +200 }, 1000);  		  
$('#projekt18_nahled').addClass('opened')
if($('#projekt18_nahled').hasClass('opened'))
	$('.projekt18_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt18_popis').removeClass('closed') }})
})			
	
$('#sec2').on('click', '#odkaz_fai', function(){
$('html, body').animate({ scrollTop: $('#projekt7_nahled').offset().top +200 }, 1000);  		  
$('#projekt7_nahled').addClass('opened')
if($('#projekt7_nahled').hasClass('opened'))
	$('.projekt7_popis').delay(500).velocity("slideDown", { duration: 800, complete: function() { $('.projekt7_popis').removeClass('closed') }})
})	
	
	
	
	
function show() {
 document.getElementById('scritta').className='visiblediv'; 
}
function hide() {
   document.getElementById('scritta').className='hiddendiv'; 
}
	

var p1 = document.getElementById("p1");
p1.onclick = show;	
var p2 = document.getElementById("p2");
p2.onclick = hide;	
var p1 = document.getElementById("p3");
p1.onclick = show;	
	
	
	
$('#p1').click(function() {
  $('h1').addClass('myClass1');
});		
	
$('#p2').click(function() {
  $('h1').removeClass('myClass1');
});		
	
$('#p3').click(function() {
  $('h1').addClass('myClass1');
});	

	
  // Set the date we're counting down to
  
    //var countDownDate = new Date("10 8, 2020 00:00:00").getTime();
    //var countDownDate = Date.parse("10, 8 2020 00:00:00");
    //("2018-02-06T20:00:00.000+04:00")
    var countDownDate = Date.parse("2020-10-08T16:00:00.000+02:00");
    console.log('3');
    console.log(countDownDate);
    // Update the count down every 1 second
    var x = setInterval(function() {
        $('#countdown').fadeIn();
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        $('#countdown #days').text((days)+'');
        $('#countdown #hours').text((hours)+'');
        $('#countdown #minutes').text((minutes+'').padStart(2,'0')+'');
        $('#countdown #seconds').text((seconds+'').padStart(2,'0')+'');

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
             $('#countdown').hide();
        }
    }, 1000);    //bez tohoto nefunguje otvirani!!! 
  
	
	

}); //end of ready