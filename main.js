// alert("work to do");


// Review 1
//  Use `.map` to take the code from the array below, 
// and place the results in a new array where each value is 5 more than it was in the the original array. 
// right the new array.

// let arr = [1, 2, 3, 4];
// let plus5 = []; // new array to hold result

// plus5 = arr.map(
    
//     (evt)=>{
//         return(evt + 5);
//     }
// );

// console.log(plus5);


// Review 2 
// Use `.map` to create a new array of objects where each object has a property for `index` and `value` 
// based on the elements in the array. Print the new array of objects.

// let arr = [1, 2, 3, 4];
// let num_objects = []; // new array to hold objects


// num_objects = arr.map(

//     (el,idx) =>{
//             return(
//                 {
//                     index:idx,
//                     value:el
//                 }
//             )
//     }

// )


// console.log(num_objects);


// Review 3
//  Use `.reduce` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

// let arr = [1, 2, 3, 4];
// // let numsdoubled_sum = []; // new variable assign the final sum

// let mBy2 = arr.map(

//     (el) => {

//      return(e *2);
//     }


// ).reduce((total, el)=> {
//     return (total + el); 
//    }
// );




// Review 4 
// Use `.filter` to return a new array that contains only the even numbers. Print the new array.
// let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
// let even_vals = []; // new array to hold result

// ever_vals = arr.filter(
//     (el) => {
//         // you need to do a check in here
//         return(el % 2 === 0);
//     }
// )



// console.log(ever_vals);



// Review 5
// Use `map` to take an array of names and return a new array that contains instances of objects you instantiated from the class below


 class Student{
        constructor(name){
                this.name = name;
        }
}
// const arrayName = ["bob","mark","kevin","jody","melissa"]
// // Iterate through the array returned using `forEach` and print the name property from each object instance in the array.

// let namesStudents = arrayName.map(
//     (el) =>{
//         return(
//             new Student(el)
//         )
//     }
// ).forEach(
//     (el) =>{
//         console.log(el.name)
//     }
// )





// we have a new array  we want to print the new name.
