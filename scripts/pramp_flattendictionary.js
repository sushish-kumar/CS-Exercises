// flatten nested arrays (multidimensional) into a 1D array

// https://www.pramp.com/challenge/AMypWAprdmUlaP2gPVLZ

function flattenDictionary(dict){
  let result={};
  for(var key in dict){
    Object.assign(result,helper(key,dict[key]));
  }

  function helper(key,val){
    let label=key;
    let output={};
    for(var ele in val){
      if(typeof val[ele] === 'object'){
        // console.log('out',output);
        Object.assign(output, helper(key+'.'+ele,val[ele]));
      }else{
        if(ele==='0' || ele===''){
          output[key]=val[ele];
        }else if(key===''){
          output[ele]=val[ele];
        }else{
          output[key+'.'+ele]=val[ele];
        }

      }
    }
    return output;
  }
  console.log(result);
  return result;
}

let dict = {
  "Key1" : "1",
  "Key2" : {
    "a" : "2",
    "b" : "3",
    "c" : {
      "d" : "3",
      "e" : "1"
    }
  }
};
flattenDictionary(dict);