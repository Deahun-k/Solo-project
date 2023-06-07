$( function() {
    $( ".datepicker-toggle input" ).datepicker({
      dateFormat: 'yy-mm-dd' // 선택한 날짜 형식
    });
    
    $( ".datepicker-toggle" ).click(function() {
      $(this).find('input').datepicker("show");
    });

    $( ".datepicker-toggle input" ).click(function() {
      $(this).datepicker("show");
    });
});

$( function() {
    $( ".datepicker-toggle2 input" ).datepicker({
      dateFormat: 'yy-mm-dd' // 선택한 날짜 형식
    });
    
    $( ".datepicker-toggle2" ).click(function() {
      $(this).find('input').datepicker("show");
    });

    $( ".datepicker-toggle2 input" ).click(function() {
      $(this).datepicker("show");
    });
});