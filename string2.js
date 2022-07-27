<!DOCTYPE html>
<html>
<body>

<h2>Never Create Strings as Objects</h2>
<p>Strings and objects cannot be safely compared.</p>

<p id="demo"></p>

<script>
let x = "John";        // x is a string
let y = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x==y);
</script>

</body>
</html>

