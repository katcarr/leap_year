var leapYear = function(year) {
  if ( year % 400 === 0 ) {
    return true;
  } else if ( year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};


$(function() {
  $("form#leap-year").submit(function(event){
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if (year) {
      $(".year").text(year);
      if(!result){
        $(".not").text("not");
      }else{
        $(".not").hide();
      }
        $("#result").show();
    } else {
      alert("Please enter a year");
    }
    event.preventDefault();
  });
});
