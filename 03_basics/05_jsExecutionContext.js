/* 
1> Global Execution Context  ===> this
2> Function Execution Context
3> Eval Execution Context
*/


/*
    1> Memory Creation Phase
    2> Execution Phase
*/

/* example*/
// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)

/*step of code execution*/
/*
(1) Global Execution
    this
(2) Memory Phase
    val1    --> undefined (line number 14)
    val2    --> undefined (line number 15)
    addNum  --> defination (line number 16 to 19)
    result1 --> undefined (line number 20)
    result2 --> undefined (line number 21)
(3) Execution Phase
    val1   --> 10 (line number 14)
    val2   -->  5 (line number 15)
    addNum -->    (line number 16)
        New Variable Environment + Execution Thread
            (1) Memory Phase
                val1  --> undefined  (line number 16)
                val2  --> undefined  (line number 16)
                total --> undefined  (line number 17)
            (2) Execution Phase
                val1  --> 10  (line number 16)
                val2  -->  5  (line number 16)
                total --> 15  (line number 17) // now its return the value to the global execution
                **after this it delete the environment**
        New Variable Environment + Execution Thread
            (1) Memory Phase
                val1  --> undefined  (line number 16)
                val2  --> undefined  (line number 16)
                total --> undefined  (line number 17)
            (2) Execution Phase
                val1  --> 10  (line number 16)
                val2  -->  2  (line number 16)
                total --> 12  (line number 17) // now its return the value to the global execution
                **after this it delete the environment**
    result1 --> 15     (line number 20)
    result2 --> 12     (line number 21)
  */
