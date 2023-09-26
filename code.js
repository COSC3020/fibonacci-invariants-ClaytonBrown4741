function fib(n) {
//	console.log(n);
	if (n<=0){
		return [0];
	}
	else if (n==1){
		return [0,1];
	}
	else{
		fibSequence = new Array(n);
		fibSequence[0]=0;
		fibSequence[1]=1;
	}
	findFib(n-2, fibSequence);
	return(fibSequence);
}

function findFib(n, fibSequence){
        if (n==-1){
		return;
	}
	else{
		var currentIndex=fibSequence.length-n;
		fibSequence[currentIndex]=fibSequence[currentIndex-1]+fibSequence[currentIndex-2];
		return findFib(n-1,fibSequence);
	}
}

//console.log(fib(10))
