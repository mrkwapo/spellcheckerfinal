function getspelling(words, name){
  console.log("words",words);
  const library = words.filter(userObj=>{
    return userObj.name === name;
  });
  if (library.length === 0){
    return null
  }
  return library[0].spelling;
}

module.exports = getspelling;