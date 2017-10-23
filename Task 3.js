<script>

//Define an object happiness within 5 properties. Each property should have default integer value, representing its priority. Then create a function that returns a list of property names sorted by priority (highest is on top).

var hapiness = [
  { property: 'friends', priority: 2 },
  { property: 'family', priority: 1 },
  { property: 'money', priority: 5 },
  { property: 'love', priority: 3 },
  { property: 'hobby', priority: 4},
];

hapiness.sort(function (a, b) {
  if (a.priority > b.priority) {
    return 1;
  }
  if (a.priority < b.priority) {
    return -1;
  }
  return 0;
});

document.write('Task 3' + '<br>' + '<br>')
for (i = 0; i < 5; i++) {
document.write(hapiness[i]['property'] + '<br>')
}

</script>
