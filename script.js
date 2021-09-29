$(document).ready(function(){
  $("button").click(function(e){
    e.preventDefault();
    //$(this).text("Update").click(function(){});
      let type = $(this).parent().attr("data-type");
    let txt = $(this).parent().children("span").text();
      let label = $(this).parent().children("b").text();
    $(this).parent().replaceWith
    ("<div class='details'><input type='"+ type + "'class='col-5 form-control' value='" + txt + "' /><button class='col-3 btn btn-dark pull-right'>Update</button></div>");


    $("button").click(function(){
         //e.preventDefault();
    let input = $(this).parent().children("input").val();
        $(this).parent().replaceWith
        ("<div data-type='"+type+"' class='details'><b>"+label+"</b> <span>"+input+"</span> <button class='btn btn-dark pull-right'>Edit</button>");
      });
});
});