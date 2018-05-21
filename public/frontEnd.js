$(".saveMe").on("click",function(){
    let id = this.id;

    console.log(id);
    
    $.ajax({
        type: 'POST',
        url: '/save/' +id
    }).done(function(data){
    console.log("article saved");
    
    })
});