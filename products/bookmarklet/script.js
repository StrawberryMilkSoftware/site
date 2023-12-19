const converter = document.getElementById('converter');
const codeElement = document.getElementById('jscode');
let code = codeElement.value;
const nameElement = document.getElementById('name');
let bmname = nameElement.value;

codeElement.addEventListener('change', function() {
    code = codeElement.value;
});

codeElement.addEventListener('change', function() {
    bmname = nameElement.value;
});


function remove_linebreaks(str) {
    let newstr = "";
     
    // Looop and traverse string
    for (let i = 0; i < str.length; i++)
        if (!(str[i] == "\n" || str[i] == "\r"))
            newstr += str[i];
        else {
            newstr += " ";
        }
    return newstr;
}

// CONVERT RAW JS TO BOOKMARKLET
converter.addEventListener('click', function () {
    let bmletCode = "";
    code = remove_linebreaks(code);
    bmletCode += "javascript: ";
    bmletCode += "(() => {  ";
    bmletCode += code;
    bmletCode += " })();";

    
    

    if (document.getElementById("bookmarklet") == null) {
        const bookmarklet = document.createElement("a");
        bookmarklet.innerHTML = bmname;
        bookmarklet.href = bmletCode;
        bookmarklet.id = "bookmarklet"
        const instr = document.createElement("p");
        instr.innerHTML = "Drag the following text to your bookmarks bar:";
        instr.id = "instr";
        
        document.body.appendChild(instr);
        document.body.appendChild(bookmarklet);
    } else {
        bookmarklet.innerHTML = bmname;
        bookmarklet.href = bmletCode;
        bookmarklet.id = "bookmarklet"
    }
    
});