
// closure and scope in loops
// private variables in classes
// recursion exercise
// memoization and function callbacks
// balanced braces

// 1hr


function Register(cashValue){
	this.cash=cashValue;
}

Register.prototype.getCashValue=function(){
	return this.cash;
}

Register.prototype.addCash=function(val){
	this.cash+=val;
	console.log(this.cash);
	return this;
}

Register.prototype.dispenseCash=function(val){
	if(this.cash-val<0){val=this.cash;}
	this.cash-=val;
	console.log(this.cash);
	return this;
}

var myReg=new Register(10);
console.log(myReg.addCash(10).dispenseCash(4).getCashValue());


function multiply(foo, bar) {
	if(bar===0){
		return 0;
	}

	console.log('abs',Math.abs(foo));

	if(bar<0){
		bar+=1
	}else{
		bar-=1;
	}

	return foo + multiply(foo, bar);
}
multiply(-6,-7);

var numExecutions;
function distToZero(arg){
	numExecutions++;
	return arg > 0 ? 1 + distToZero(arg-1) : 0;
}
numExecutions=0;
console.log(distToZero(5));
console.log(distToZero(5));
console.log(distToZero(8));
console.log(numExecutions);

var memo={};
function cacheReturn(func) {
	return function(arg){
		if(memo[arg]){
			return arg;
		}else{
			memo[arg]=arg;
			return func(arg);
		}
	};
}

cacheReturn(distToZero(5));
cacheReturn(distToZero(3));

var cdt=cacheReturn(distToZero);
console.log(cdt(2));

// Balanced Braces
// https://repl.it/@smillaraaq/Balanced-Braces