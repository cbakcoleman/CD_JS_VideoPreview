console.log("page loaded...");

var mousevid = document.querySelector(".mousevid");

mousevid.addEventListener("mouseover",
function(e){
    mousevid.play()
})

mousevid.addEventListener("mouseout",
    function(e){
        mousevid.pause()
    })
