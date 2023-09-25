function fib(n) {
//	console.log(n);
	if (n<=0){
		fibSequence = new Array(0);
		n=0;
	}
	else{
		fibSequence = new Array(n);
	}
	findFib(n, fibSequence);
	return(fibSequence);
}

function findFib(n, fibSequence){
        if (n<=0){
                fibSequence[0]=0;
		return 0;
        }
        else if (n==1){
		fibSequence[0]=0;
		fibSequence[1]=1;
		return 1;
        }
        else{
		temporaryValue=(findFib((n-1), fibSequence) + findFib((n-2), fibSequence)); 
		fibSequence[n]=temporaryValue;
		return temporaryValue;
	}
}

//console.log(fib(0))
