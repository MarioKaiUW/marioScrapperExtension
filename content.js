// this enable the content script to tell the background script to turn on
// the extension label

chrome.runtime.sendMessage({todo: "showPageAction"});

var scrapperInterface = document.createElement("div");
scrapperInterface.style.width = '1000px';
scrapperInterface.style.height = '200px';
scrapperInterface.style.backgroundColor = 'grey';

var rootElement = document.querySelector('#root');

scrapperInterface.innerHTML = "<button id='changeColor'> Mario</button>";

rootElement.insertBefore(scrapperInterface, rootElement.firstChild);

document.querySelector('#changeColor').addEventListener('click', function() {
    document.querySelector('h1.header').style.color = 'red';
    var allMovie = document.querySelectorAll('.titleColumn a');
    //var counter = 0;
    // while(allMovie[counter]) {
    //     console.log(allMovie[counter].innerText);

    //     counter = counter + 1;
    // }
    allMovie[0].click();

    
    
})

console.log(document.querySelector('.title_wrapper h1'));





// this is the function used to get element by xpath
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

