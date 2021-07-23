/* ----------------from codewars.com----------------------
 solved by -------------------s3sivaram------------on 22-Jul-21--------------
  // 3_6,9==> [3,4,5,6,9]
  see related ---ArraytoRange.js
  */

function toArray(rangearray) {
  // -------Convert a range array to a full array toArray()-----------------

  function createArray(start, end) {
    // create a array filled with values starting from start to end
    let newarray = [];
    let length = end - start;
    // console.log("star,end", start, end);
    for (let i = 0; i <= length; i++) {
      newarray.push(start);
      start = parseInt(start) + 1;
    }
    return newarray;
  }

  let expandedarray = [];
  let splitarray = rangearray.split(",");

  let res = splitarray.map((e) => {
    let start = parseInt(e.split("_")[0]);
    let end = e.split("_")[1] || start;
    expandedarray = [...expandedarray, createArray(start, end)];
  });

  console.log("expanded array=", expandedarray);
  let result = expandedarray.flat();
  // let result =expandedarray.reduce((a,e)=>a.concat(e),[]) ---alternative to flat function
  console.log("result=", result);
  return result;
  // console.log(expandedarray.flat().toString());
}
let toArray_sample = "3_6,9,10_15";
console.log(toArray(toArray_sample));
