const selectOptions = ( opts ) => {
    let from, to = "";
    if( opts.length == 0 )
      return { from, to };
    from = opts[Math.floor( Math.random() * opts.length )];
    to = opts[Math.floor( Math.random() * opts.length )];
    while( from === to ){
      to = opts[Math.floor( Math.random() * opts.length )];
    }
    return { from, to };
}


const selectWord = (words, opts, from, to) => {
    let word, translated = "";
    if( words.length == 0)
        return { word, translated };
    const selected = words[Math.floor(Math.random() * words.length )];
    let idx = opts.indexOf(from);
    word = selected[idx];
    idx = opts.indexOf(to);
    translated = selected[idx];
    return { word, translated };
}

export {
    selectOptions,
    selectWord
}