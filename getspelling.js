function getspelling(words, word){
  console.log("words",words);
  const library = words.filter(userObj=>{
    return userObj.word === word;
    
  });
  if (library.length === 0){
    return null;
  }
  return library[0].key;
}

module.exports = getspelling;