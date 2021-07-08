
function spanClicked(e) {
    e.preventDefault();
    //console.log(e.target);
    //console.log( e.target.parentElement.parentElement);
    //console.log( e.target.parentElement.parentElement.parentElement);
    var children = e.target.parentElement.parentElement.childNodes;
    children.forEach(function(item){
        //console.log(item);
        if( (item.tagName == 'I') || (item.tagName == 'SPAN') ) {
            item.classList.toggle("hide");
        } 
    });
    e.target.parentElement.parentElement.parentElement.querySelector("ul").classList.toggle("hide");
}
function linkClicked(e) {
    e.preventDefault();
    console.log(e.target);
    
    console.log(e.target.tagName);
    if(e.target.tagName === 'I') {
        var children = e.target.parentElement.childNodes;
        
        children.forEach(function(item){
            if( (item.tagName == 'I') || (item.tagName == 'span') ) {
                item.classList.toggle("hide");
                console.log("found element to change");
            } 
        });
        e.target.classList.remove("hide");
        e.target.parentElement.parentElement.classList.toggle("collapsed");
        e.target.parentElement.parentElement.querySelector("span").classList.toggle("hide");
        e.target.parentElement.parentElement.parentElement.querySelector("ul").classList.toggle("hide");
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle("collapsed");
        e.target.parentElement.querySelector("span").classList.toggle("hide");
        e.target.parentElement.parentElement.querySelector("ul").classList.toggle("hide");
    }else if(e.target.tagName === 'A') {
        e.target.classList.toggle("collapsed");
        e.target.querySelector("span").classList.toggle("hide");
        e.target.parentElement.querySelector("ul").classList.toggle("hide");
    } else {
        console.log('invalid target' + e.target.tagName);
    }
}