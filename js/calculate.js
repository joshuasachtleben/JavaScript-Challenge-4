var printNumbers = function() {

  var evenSum = 0,
      oddSum = 0;

  for(var i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
      console.log(i);
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log('The sum of all odd numbers is: ' + oddSum +
              '\nThe sum of all even numbers is: ' + evenSum);
}

$('#generateNumbers').click(printNumbers);
