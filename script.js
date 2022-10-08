document.body.style = "border : 10px solid red";

document.body.addEventListener('mouseup', function(){
   let selection = window.getSelection();
    const final = selection.toString();
    console.log(final)
})