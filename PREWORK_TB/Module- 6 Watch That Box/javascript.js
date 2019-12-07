
document.getElementById("button1").addEventListener("click", function(){

      var tag = document.getElementById("box");
      // this code makes the box grow

        tag.style.background = 'orange';
        tag.style.height = '250px';
});

document.getElementById("button2").addEventListener("click", function(){
    // this code makes the box blue

    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function(){
    //this code makes the box's color fade
    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("button4").addEventListener("click", function(){
    //this code resets the box to the original size
    
    var reset = document.getElementById("box");
    reset.style.backgroundColor = "orange";
    reset.style.height = "150px";
    reset.style.opacity = "1";

});
