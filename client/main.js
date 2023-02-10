$.ajax({
  url: "/server/sample/", 
  type: "get",
  success: function (data) {
    alert(data);
    document.getElementById("text").innerHTML = "Here is the Email" + data;
  },
  error:function(error){
    alert(error);
  }
});
}
