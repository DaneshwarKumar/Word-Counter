
let textbox = document.getElementById('text-box');

textbox.addEventListener('input' , function(){
    // getting the input text on text variable 
    let text = this.value;
    let char = text.length;

    // getting the length of the characters on text 
    document.getElementById('char').innerHTML = char;

    // removing the white spaces from front and back 
    text = text.trim();

    // spliting the text by white spaces and storing in form of array element 
    let words = text.split(" ");

    // function to remove the white spaces 
    let cleanList =  words.filter(function(ele){
        return ele != "";
    })


    document.getElementById("words").innerHTML = cleanList.length; 
});

