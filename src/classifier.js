/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
  // Your code should go here.
 const groups = [];

 input.map((data) => {
   if(groups === undefined || groups.length == 0) {
     let studentData = [];
     studentData.push(data);
     groups.push(studentData);
     return;
     
   } else {
     groups.map((group) => {
       if(group.length < 3) {
         group.push(data);
         return;
       }
     })
   }
 })

 let ageDiff = (x, y) => {
   let dateX = new Date(x);
   let dateY = new Date(y);

   let dateDiff = Math.abs(dateX.getFullYear() - dateY.getFullYear());

   if(dateDiff <= 5)
    return dateDiff;
 }


}

module.exports = classifier;
