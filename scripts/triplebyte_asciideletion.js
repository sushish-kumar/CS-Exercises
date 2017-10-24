// return the ascii sum of the chars that are not shared among both strings

function ascii_deletion_distance(str1, str2) {
  str1=str1.split('');
  str2=str2.split('');
  let result=[];

  for(let i=0;i<str1.length;i++){
    if(str2.indexOf(str1[i])>=0){
      str2.splice(str2.indexOf(str1[i]),1);
    }else{
      result.push(str1[i]);
    }
  }

  // console.log(result,str2);

  result=result.concat(str2);

  return result.reduce((acc,currVal) => {
      return acc + currVal.charCodeAt(0);
    }
    ,0);
}

ascii_deletion_distance("thought", "sloughs");
// ascii_deletion_distance("boat", "got");
