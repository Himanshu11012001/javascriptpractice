<!DOCTYPE html>
<html>
<body>

<h2>JavaScript let</h2>

<p>Redeclaring a variable with <b>let</b>, in another scope, or in another block, is allowed:</p>

<p id="demo"></p>

<script>
let x = 7;   // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
