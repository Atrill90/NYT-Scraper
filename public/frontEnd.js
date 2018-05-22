$(".saveMe").on("click",function(){
    let id = this.id;

    console.log(id);
    
    $.ajax({
        type: 'POST',
        url: '/save/' +id
    }).done(function(data){
    console.log("article saved")
    
    })
});
$(".deleteThis").on("click",function(){
    let id = this.id;

    
    $.ajax({
        type: 'POST',
        url: '/delete/'+id 
    }).done(function(data){
    console.log("article delete");
    location.reload();
    })
});