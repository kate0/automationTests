<script>

//Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function necessaryArray() {
	var taskArray = [];
	for (n = 0; n < 10; n++) {
    	taskArray[n] = Math.floor(Math.random() * 100);
		}
        taskArray.sort(function(a, b) {
        			   return a - b
                       });
        multipleValue = taskArray[7]*taskArray[8]*taskArray[9]
    return 'Array values to check result: ' + taskArray + '<br>' + 'Result: ' + multipleValue
    }


document.write('Task 1' + '<br>' + necessaryArray())

</script>
