/*
    * @author roop kadam
       @description calculator code
*/
var expression="";
var val;

/**@function one(val)
@description fetching the numbers
@param {array} val
@return {array}  expression
         containing numbers and operators
 */
function one(val) {
	document.getElementById('text1').value += val;
	if (val == '+' || val == '*' || val == '-' || val == '/') {
		expression = expression + "|" + val + "|";
	}
	else{
		expression += val;
	}
}
/** 
   @function textClear
   @description used to clear user's input text box
*/
function textClear() 
{
		document.getElementById('text1').value = "";
	    expression="";
}

/** 
   @function equal
   @description used for splitting array
    and passing it to calculate()
*/
function equal() {
	expArr = expression.split("|");
	calculate(expArr);
}

/** 
   @function calculate()
   @description 
   @param {array} expArr
   
*/
function calculate(expArr) {
	console.log(expArr);
	let index = 0;
	let answer = 0;
	//Division for each function
	expArr.forEach(function (number) {
		console.log(number);
		if (number == "/")
		 {
			number1 = index - 1;
			number2 = index +1;
			answer = parseInt(expArr[number1]) / parseInt(expArr[number2]);
			expArr.splice(index,2);
			expArr[number1]=answer.toString();
		}
		index +=1;
	});
	index=0;

//Multiplication for each function
	expArr.forEach(function (number) 
	{
		debugger;
		console.log(number);
		if (number == "*")
		 {
			number1 = index - 1;
			number2 = index +1;
			answer = parseInt(expArr[number1]) * parseInt(expArr[number2]);
			expArr.splice(index,2);
			expArr[number1]=answer.toString();
		}
		index +=1;
	});
	index = 0;

//Addition for each function
expArr.forEach(function (number) {	
	console.log(number);
	if (number == "+")
	 {
		number1 = index - 1;
		number2 = index +1;
		answer = parseInt(expArr[number1]) + parseInt(expArr[number2]);
		expArr.splice(index,2);
		expArr[number1]=answer.toString();
	}
	index +=1;
});
index = 0;

//Substraction for each function
expArr.forEach(function (number) {
	console.log(number);
	if (number == "-")
	 {
		number1 = index - 1;
		number2 = index +1;
		answer = parseInt(expArr[number1]) - parseInt(expArr[number2]);
		expArr.splice(index,2);
		expArr[number1]=answer.toString();
	}
	index +=1;
});
index = 0;
document.getElementById('text1').value = +answer;
}
