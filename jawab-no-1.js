const getNewWord = (word)=>{
    const words = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']; 
    let hasil = [];
    const getWord = (param, param2) => {
      if (param2.length === 0){
        hasil.push(param.join(','));
        return;
      }

      for (let i = 0; i < words.length; i++){
        if (param2.indexOf(words[i]) === 0){
          param.push(words[i]);
          getWord(param, param2.slice(words[i].length));
          param.pop();
        }
      }
    }
    getWord([], word);
    return hasil;
  };

  const word1 = 'programit'
  const word2 = 'programmerit'
  const newKata = getNewWord(word2)
  
  newKata.map(i=>{
    console.log(i)
  })