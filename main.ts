import { cloneDeep } from "lodash";

function generatePermutations(currObj : Object): Object[] {
  var resultsObjArr : Object[] = [];
  var arrFlag = false;
  //unknown number of object propertie, so need to iterate through them recursively
  for (var [key,value] of Object.entries(currObj)) {
    if (Array.isArray(value)) {
      arrFlag = true;
      if (value.length == 0) {
        //element is an array, but array is empty
        //do nothing
      } else if (value.length == 1) {
        //one element, un-array it
        currObj[key] = value[0];
      } else {
        //console.log(`${key} holds an array`)
        //more than one array element, recurse
        for (var arrElement of value) {
          var newObj : Object = cloneDeep(currObj);
          newObj[key] = arrElement;
          resultsObjArr = resultsObjArr.concat(generatePermutations(newObj));
        }
        //need to do this outside the value loop so we collect all the permutations from that value array
        return resultsObjArr;
      }
    }
  }
  if (!arrFlag) {
    //return condition is that none of the object properties is an array
    return resultsObjArr.concat(currObj);
  }
};

const testObj1 : Object = {
  pilot: ["Han Solo", "Lando Calrissian"],
  copilot: ["Chewbacca", "Rey"],
  ship: "Falcon",
  speed: "1.5c"
};
console.log('Test 1:');
console.log(generatePermutations(testObj1));

const testObj2 : Object = {
  pilot: ["Han Solo", "Lando Calrissian"],
  copilot: ["Chewbacca", "Rey"],
  ship: 3,
  speed: ["1.5c"]
};
console.log('Test 2:');
console.log(generatePermutations(testObj2));

const testObj3 : Object = {
  pilot: ["Han Solo", "Lando Calrissian"],
  copilot: ["Chewbacca", "Rey"],
  ship: [true, false],
  speed: 3
};
console.log('Test 3:');
console.log(generatePermutations(testObj3));
