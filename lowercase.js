<!DOCTYPE html>
<html>
<body>

<h2>JavaScript String Methods</h2>

<p>Convert string to lower case:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Hello World!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toLowerCase();
}
</script>

</body>
</html>

