var url = "http://127.0.0.1:3000/"

$(document).ready(() => {
  $("button").click((e)=> {
    e.preventDefault();
    //console.log($("#jsonString").val())
    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'text/plain',
      data: $("#jsonString").val(),
      success: function (data) {
      }
    })
  })
})
