// Monkey patch the Array class and add a my_inject method. If my_inject receives
// no argument, then use the first element of the array as the default accumulator.

Array.prototype.myReduce = function (func, acc) {

}
