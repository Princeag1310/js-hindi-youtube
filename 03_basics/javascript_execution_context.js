// Javascript execution context

// {} -> code files-> Global EC ->this
//Browser -> this-> window object
// javascript-> single threaded

//-> Global Execution Context


// -> Functional Execution Context

//-> Eval Execution Context

// {} -> whole code run in two phases
//1. Memory Creation Phase
// 2. Execution Phase

//->1. Global Execution-> This
//->2. Memory Phase-> val1-> undefined
//val2-> undefined
//addNum-> function Definition
//result1->undefined
//result2-> undefined

//3. Execution Phase
//-> val1-> 10
//-> val2-> 5
//addNum-> different execution Context->
////////////////->->->->-> new environment->->->-> execution thread-> memory creation phase and execution phase is done again->->-> return the thing in Global execution context
//////->-> deleting of new environment

///////////////////// call Stack////////////////