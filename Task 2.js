<script>

//Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function secondsAmount() {
    var i = new Date();
    var Hours = i.getHours();
    var Minutes = i.getMinutes();
    var Seconds = i.getSeconds();
    totalSec = (Hours * 3600) + (Minutes * 60) + Seconds;
    currentTime = 'Current time: ' + Hours + ":" + Minutes + ":" + Seconds;

    return currentTime + '<br>' + 'Day lasts for: ' + totalSec + ' seconds'
    }

document.write('Task 2' + '<br>' + secondsAmount())

</script>
