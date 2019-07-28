function submit_all(all_obj)
{

	var api_call=new XMLHttpRequest();
	var json=JSON.stringify(all_obj);

 	api_call.addEventListener('load',function()
	{
		if (api_call.status<=400) 
		{
			print_element(api_call.response);
		}
		else
		{
			console.log("error is -- " + api_call.status);
		}
	});

		api_call.addEventListener('error', function(event){
    	console.log('Error in HTTP request!')
  		});
	

	api_call.open('POST','http://localhost:8080/auth/register')
	api_call.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  api_call.send(json);
}


function print_element(input)
{
	var select1=document.querySelector('body')
	var create_el=document.createElement('p')
	create_el.textContent=input;
	select1.appendChild(create_el);
}

var form = document.querySelector('#sendForm')

sendForm.addEventListener('click', function(event)
 {
  event.preventDefault();

	var send_oj=document.querySelectorAll('.form_element');
	var all_obj=
	{
		name: send_oj[0].value,
		email: send_oj[1].value,
		password:send_oj[2].value,
		username:send_oj[3].value,
		mobile:send_oj[4].value,
		description:send_oj[5].value
	}
	submit_all(all_obj);
	console.log(send_oj[0].value);
});
