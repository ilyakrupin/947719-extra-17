var reduceData = function(data) {

  var string =  {
    symbol: data[0],
    counter: 0,
    new: ''
  }

  for (var i = 0; i < data.length + 1; i++) {
    if (string.symbol === data[i]) {
      string.counter++;
    } else {
      string.new += string.symbol + '' + string.counter;
      string.symbol = data[i];
      string.counter = 1;
    }
  }

  return string.new;
};

reduceData('AAAbbcDDD');
