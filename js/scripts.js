function kgToLbs(value){
  return value*2.2;
}
$(document).ready(function() {
  $("form#conv").submit(function(event) {
    var kg = $("#kg").val();
    var valueLbs = kgToLbs(kg);
    $("#lbs").val(valueLbs);
    event.preventDefault();
  });
});
