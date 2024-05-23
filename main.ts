//Task 18: Seeing the world, think 5 places in the world, you would like to visit.
//part 1: Store the location in array.Make sure that array is not in alphabetical order.
//part 2: Print your array in its original order.
//part 3:Print your array in alphabetical order without modifying the actual list.
//part 4:Show that your array is still in its orignal order by printing it.
//part 5: Print your array in reverse alphabetical order without changing the order of the original list.
//Part 6: Show that your array is still in its original order by printing it again.
//Part 7: Reverse the order of your list. print the array to show that its order has been changed.
//Part 8: Reverse the order of your list again. print the list to show its back to its orignal order
//part 9: Sort array so it's stored in alphabetical order. print array to show that its order has changed.
//part 10: Sort to change your array so its stored in reverse alphabetic order. print the list to show that
//its order has been changed.

let favplaces:string[]=["Australia","Canada","Italy","Dubai","Thailand"];
console.log(favplaces);
//p3
let copyarry=favplaces.slice();
let sortedarry=copyarry.sort();
console.log(sortedarry);

//p4original array
console.log(copyarry);

//p5: reverse order printing
let copyarry2=favplaces.slice();
let reverseorderarry=copyarry2.reverse();
console.log(reverseorderarry);

//p6: show that array in original position.
console.log(favplaces);

//p7 reverse order and print to see original array has been changed

let reverseorigarray2=favplaces.reverse();
console.log(reverseorigarray2);
let againreverse= reverseorigarray2.reverse();
console.log(againreverse);

//p9 sorting original array
let sortedarray=favplaces.sort();
console.log(sortedarray)
//p10 reverse sorting
let reverseorderarry3=sortedarray.reverse();
console.log(reverseorderarry3);