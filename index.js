let result = []
let operators = ['+', '–', '×', '÷']

function execute(text) {
    result.push(text)
    console.log(result)
}

function remove() {
    result.pop()
    console.log(result)
}

function clearAll() {
    result.length = 0;
    console.log(result)
}

function complete() {
    const str = result.join(",");
    console.log(str);
    let total = new Function(("return " + str + ""));
    console.log(total());
};

document.querySelectorAll('.button_container > div').forEach((element) => {
    element.addEventListener('click', (event) => {
        console.log(event.target.innerText)
        let text = event.target.innerText
        switch (text) {
            case '<' : 
            remove();
            break

            case 'AC' : 
            clearAll();
            break

            case '=' : 
            complete();
            break
            
            case operators[0] : 

            case operators[1] : 

            case operators[2] : 

            case operators[3] : 

            default : 
            execute(text)
        } 

    });
});

