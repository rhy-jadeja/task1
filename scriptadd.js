<html>
<head>
<script>
  function myFunction()
   {
    var y = document.getElementById("txt1").value;
    var z = document.getElementById("txt2").value;
    var x = y + z;
    document.getElementById("demo").innerHTML = x;
  }
  </script>
  </head>
  <body>
<p>
  Click the button to calculate x.
  <button onclick="myFunction()">Try it</button>
</p>
<p>
  Enter first number:
  <input type="text" id="txt1" name="text1" value="1">
  Enter second number:
  <input type="text" id="txt2" name="text2" value="2">
</p>
<p id="demo"></p>
</body>
</html>