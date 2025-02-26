function Off(){
    document.querySelectorAll("#files form")
    .forEach(function(frm){
      frm.style.display = "none";
    })
  }

  document.querySelector("#fileicon")
  .addEventListener("click", function(){
    Off();
    document.querySelector("#fileform").style.display = "initial";
  });

  document.querySelector("#foldericon")
  .addEventListener("click", function(){
    Off();
    document.querySelector("#folderform").style.display = "initial";
  });

  document.querySelector(".ri-refresh-line")
  .addEventListener("click", function(){
    Off();
  })