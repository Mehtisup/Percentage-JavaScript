<script>
var x = 0;
setInterval(myPercent, 200);

function myPercent() {
    document.getElementById("percent").innerHTML = ++x + "%";
    if (x == 97) {
        document.getElementById("percent").style.display = "none";
        document.getElementById("final").innerHTML = "96%";
    }
}
</script>
