var words = ['bat','code','cat','act','cab','craz','tac'];
    const groupedAnagrams = anagramGrouper(words);
    function anagramGrouper(words){
      const anagrams = {};
      words.forEach((word)=>{
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
      });
      return anagrams;
    }

    function alphabetize(word) {
      if (!word) {
          return;
      }
      word = word.split('');
      word = word.sort();
      word = word.join('');
      return word;
    }
        
    for(const sortedWord in groupedAnagrams){
      if(groupedAnagrams[sortedWord].length > 1 ){
        console.log(groupedAnagrams[sortedWord].toString());
      }
    }
    