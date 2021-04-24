const testObj : Object = {
  pilot: ["Han Solo", "Lando Calrissian"],
  copilot: ["Chewbacca", "Rey"],
  ship: "Falcon",
  speed: "1.5c"
}

function generatePermutations(currObj : Object): Object[] {
  var resultsObjArr : Object[];
  //unknown number of object propertie, so need to iterate through them recursively
  for (var [key,value] of Object.entries(currObj)) {
    if (Array.isArray(value)) {
      if (value.length == 0) {
        //array is empty
      } else if (value.length == 1) {
        //one element
      } else {
        //more than one array element, recurse
        arrElement = value.pop();
        newObj = currObj;
        newObj[key] = arrElement;
        resultsObjArr.append(generatePermutations())
      }
    }
  }
  return resultsObjArr;
};


/*  correct results
[
  {
    "pilot": "Han Solo",
    "copilot": "Chewbacca",
    "ship": "Falcon",
    "speed": "1.5c"
  },
  {
    "pilot": "Han Solo",
    "copilot": "Rey",
    "ship": "Falcon",
    "speed": "1.5c"
  },
  {
    "pilot": "Lando Calrissian",
    "copilot": "Chewbacca",
    "ship": "Falcon",
    "speed": "1.5c"
  },
  {
    "pilot": "Lando Calrissian",
    "copilot": "Rey",
    "ship": "Falcon",
    "speed": "1.5c"
  }
]
*/
