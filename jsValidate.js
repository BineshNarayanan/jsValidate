/*
 * Author : Binesh Narayanan*/

$.validator.addMethod("alphabetsandspace", function(value, element) {
  	return this.optional(element) || /^[a-z ]+$/i.test(value);
});


$.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^[a-z0-9]+$/i.test(value);
});


$(function(){
	$(".mandatory-select").each(function(){
		$(this).rules("add", {
			required : true,
			messages :{
				required : "Please Select a " + $(this).attr('data-labelname')
			}
		});
	});	

	$(".mandatory-text").each(function(){
		$(this).rules("add", {
			required : true,
			messages :{
				required : "Please enter a " + $(this).attr('data-labelname')
			}
		});
	});	

	$(".digits").each(function(){
		$(this).rules("add", {
			digits : true,
			messages :{
				digits : "Please enter only digits"
			}
		});
	});	

	var elements = $("input[class*='minlength-']");
	$.each(elements,function(index, element){
		var classes = element.classList;
		$.each(classes, function(no, clazz){
			if(clazz.match("^minlength")){
				var minlengthvalue = clazz.split("-")[1];
				$(element).rules("add", {
					minlength : minlengthvalue,
					messages :{
						minlength : "Please enter atleast {0} characters"
					}
				});
			}	
		});
		
	});

	var elements = $("input[class*='maxlength-']");
	$.each(elements,function(index, element){
		var classes = element.classList;
		$.each(classes, function(no, clazz){
			if(clazz.match("^maxlength")){
				var maxlengthvalue = clazz.split("-")[1];
				$(element).rules("add", {
					maxlength : maxlengthvalue,
					messages :{
						minlength : "Please enter only a max of {0} characters"
					}
				});
			}	
		});
		
	});

	$(".minlength").each(function(){
		$(this).rules("add", {
			minlength : 4,
			messages :{
				minlength : "Please enter atleast {0} characters"
			}
		});
	});	

	$(".maxlength").each(function(){
		$(this).rules("add", {
			maxlength : 20,
			messages :{
				maxlength : "Please enter only a max of {0} characters"
			}
		});
	});
	
	$(".alphabetsandspace").each(function(){
		$(this).rules("add", {
			alphabetsandspace : true,
			messages :{
				alphabetsandspace : "Please enter only alphabets"
			}
		});
	});	

	$(".alphanumeric").each(function(){
		$(this).rules("add", {
			alphanumeric : true,
			messages :{
				alphanumeric : "Please enter Alphabets or Numbers"
			}
		});
	});
	
	$(".email").each(function(){
		$(this).rules("add", {
			email : true,
			messages :{
				email : "Please enter a valid e-mail"
			}
		});
	});
});

