window.onscroll = function() {scroll_all()};

function scroll_all() 
{
  	var scr = document.body.scrollTop || document.documentElement.scrollTop;
  	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  	var scrolled = (scr / height) * 100;
  	document.getElementById("add_progress").style.width = scrolled + "%";
}

var display_out="";
function api_call()
{
	var create_d=document.createElement('div')
	create_d.setAttribute('id','div_new')
	var btn=document.getElementById("select1")
	btn.appendChild(create_d);

	var create_p=document.createElement('p')
	var get_api=new XMLHttpRequest();
	var url='https://www.potterapi.com/v1/houses?key=$2a$10$ayNqcYbqDCBYUq6I0FK7q.vZP65MCqdnYM.seMdcjxcNcPZVkGn8G'
	
	if(display_out!="")
	{
		create_p.innerHTML=all_input(display_out);
	}
	else
	{
		get_api.open('GET',url);
		get_api.send();
		get_api.onload=function()
		{
			if (get_api.status==200) 
			{
				display_out=get_api.response;
				create_p.innerHTML=all_input(display_out);
			}
			else
			{
				console.log("Error code = " + get_api.status);
			}
		}
	}
	create_p.style.cssFloat="left";
	create_p.style.marginTop="70px";
	create_p.style.marginLeft="50px";
	create_p.style.padding='10px';
	create_p.style.border = '5px solid red';
	create_p.style.fontSize='25px';
	create_p.style.color="#FDFAFA";
	var search=document.getElementById('div_new')
	search.appendChild(create_p);
}

function all_input(display_out)
{
	var doc=document.getElementById("option_select").value
	var outon =JSON.parse(display_out)
	var temp="";
	for(var i=0; i<=outon.length-1; i++)
	{
		if (doc==outon[i]["name"]) 
		{
				temp= "Name = " + outon[i]["name"] + "<br>" + "Mascot = " +  outon[i]["mascot"] + "<br>" 
				+ "Head Of House = " +  outon[i]["headOfHouse"] + "<br>" + "HouseGhost = " + outon[i]["houseGhost"]
				+ "<br>" + "Founder = " + outon[i]["founder"] + "<br>" + "School = " + outon[i]["school"];	
		}
	}
	return temp;
}

