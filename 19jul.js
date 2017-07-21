
	var arr=[];
	var a1="";
	function alldata()
{
	var a=document.getElementById("t1").value;
	document.getElementById("t1").value="";
	console.log(a);
	arr.push(a);
	console.log(arr);
	a1 += "<li>" + arr + "</li>";
	function disp()
	{
	for (var I = 0; I < arr.length; I++)
  	{
       arr = "<li>" + arr[I] + "</li>";
       document.getElementById("name").innerHTML += a1;

  	}
}
  function disp()
  {

  }
}