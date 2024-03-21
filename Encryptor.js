function setFocus() {
    let textArea = document.getElementById("textAreaLeft");
    textArea.focus();
}

setFocus();  // Call the function to set focus on the textarea when the page loads

const withoutMessage = document.getElementById("withoutMessage");
const outputText = document.getElementById("outputText");
const rightButtonsContainer = document.getElementById("rightButtonsContainer");

function displayErrorMessage(message) {
    alert(message);
    setFocus();
}

function processText(applyTextTransformation) {
    const text = document.getElementById("textAreaLeft").value;
    if (text.length === 0) {
        displayErrorMessage('The text field is empty. Please enter a message to encrypt or decrypt');
        return null;
    }
    if (/[^a-zñ ]/.test(text)) {
        displayErrorMessage('Write only lowercase letters without accents');
        return null;
    }
    withoutMessage.style.display = "none";
    outputText.style.display = "flex";
    rightButtonsContainer.style.display = "flex";

    return applyTextTransformation ? applyTextTransformation(text) : text;
}

function encryptText(text) {
    return text.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function encrypt() {
    const text = processText(encryptText);
    if (text !== null) {
        document.getElementById("textAreaRight").innerHTML = text;
    }
}

function decrypt() {
    const text = processText(decryptText);
    if (text !== null) {
        document.getElementById("textAreaRight").innerHTML = text;
    }
}

function copyText() {
    const text = document.getElementById("textAreaRight");
    text.select();
    document.execCommand("copy");
    alert("Text copied to clipboard");
}
