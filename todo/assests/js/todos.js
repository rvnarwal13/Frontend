$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().remove();
	event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").toggle();
})