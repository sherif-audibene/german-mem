import B1 from './B1.json';
var wordCount=1;
var x = JSON.parse(JSON.stringify(B1))

export function previousWord(){
    console.log(x[wordCount])

wordCount--
return x[wordCount]

}


export function nextWord(){

    console.log(x[wordCount])
    wordCount++
    return x[wordCount]

}
