function spiralSum(num) {
    var sum = 1, spiral = 1;
	for (var i = 2; i <= num; i+=2) {
        for (var j = 0; j < 4; j++) {
            spiral += i;
            sum += spiral;
        }
    }
    return sum;
}