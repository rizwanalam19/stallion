/* 	var data = {
         
		 "access_token": "y574p41ic713eop6i8yk74k2"
    };
	var gDebug = true;
	
	function logConsole(msg) {
        if (gDebug) console.log(msg);
    }

    function onSuccess() {
      logConsole("mail sent successfully") ;
	  $("#name").val("");
	  $("#email").val("");
	  $("#subject").val("");
	  $("#message").val("");
	  $("#btnSendEmail").prop("value", "Send Message"); 
	  $('#btnSendEmail').prop('disabled', false);
	  alert("Thank you For Message !");
    }

    function onError(error) {
      logConsole("mail cannot be sent.") ;
	  $("#btnSendEmail").prop("value", "Send Message"); 
	  $('#btnSendEmail').prop('disabled', false);
    }

    function sendEmail() {
        logConsole("invoking script") ;
		if(validateEmail($("#email").val())){
		    $('#btnSendEmail').prop('disabled', true);
		    $("#btnSendEmail").prop("value", "Sending..."); 
			
			var subject = $("#subject").val() +'{ Name:'+ $("#name").val() + '- Email:'+ $("#email").val()+'}';
			var message = $("#message").val();
			data['subject'] = subject;
			data['subject'] = subject;
			data['text'] = message;
			$.post('https://postmail.invotes.com/send',
				data,
				onSuccess
			).fail(onError);
		}
    }    
	
	function validateEmail(userEmail){
       if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail)){
          return (true)
       }  
	   alert("You have entered an invalid email address!")
       return (false)
    } */

	var gDebug = true;

	function logConsole(msg) {
        if (gDebug) console.log(msg);
    }
	logConsole("Send Mail Js Load...") ;

	function sendEmail() {
		logConsole("Clicked on send button...") ;
        if ($("#email").val() != "" && $("#email").val() != null) {
			var Name = $("#name").val();
			var Mobile = "9932659470";
			var EmailId = $("#email").val();
			var Subject = $("#subject").val();
			var message = $("#message").val();
            var postData = { Name: Name, Mobile: Mobile, EmailAddr: EmailId, Address: Subject, ExplainYourIssue: message }
            $.ajax({
                type: "POST",
                url: "https://webapi-click4pandit.azurewebsites.net/api/TriggerMail/SendEmailForContact",
                data: postData,
                success: function (data) {
                    if (data.ReturnStatus == "success") {
						logConsole(data.ReturnStatus) ;
                        onSuccess();
                    }
                    else{
						onError(data.ReturnErrMsg);
					}
                },
                dataType: "json"
            });
        }
    }

	function onSuccess() {
		logConsole("mail sent successfully") ;
		$("#name").val("");
		$("#email").val("");
		$("#subject").val("");
		$("#message").val("");
		$("#btnSendEmail").prop("value", "Send Message"); 
		$('#btnSendEmail').prop('disabled', false);
		alert("Thank you For Message !");
	  }
  
	  function onError(error) {
		logConsole("mail cannot be sent.") ;
		$("#btnSendEmail").prop("value", "Send Message"); 
		$('#btnSendEmail').prop('disabled', false);
	  }