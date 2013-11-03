$(function() {

  // localstorage 
  if (localStorage) {
    if (localStorage.type) {
      $("#type").find("option[value=" + localStorage.type + "]").attr("selected", true);
    }
    if (localStorage.name) {
      $("#name").val(localStorage.name);
    }
    if (localStorage.email) {
      $("#email").val(localStorage.email);
    }
    if (localStorage.message) {
      $("#message").val(localStorage.message);
    }
    $("input[type=text],select,textarea").change(function(){
      $this = $(this);
      localStorage[$this.attr("name")] = $this.val();
    });
    
    $("form")
      .submit(function(){
        localStorage.clear();
      })
      .change(function(){
        console.log(localStorage);
      });
  }
});