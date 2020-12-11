'use strict';

// lblBooleanMethod.innerHTML = '<strong>Hi Man</strong>';
// lblBooleanMethod.innerText += '<strong>Hi Man</strong>';

const lblBooleanMethod = getElementById('lblBooleanMethod');
const lblDoubleNegation = getElementById('lblDoubleNegation');

function showBooleanConversions(){

    assignValueToBooleanLabel(`Boolean(false) === ${Boolean(false)}`);
    
    assignValueToBooleanLabel(`\n\nBoolean(0) === ${Boolean(0)}`);
    assignValueToBooleanLabel(`\nBoolean(-0) === ${Boolean(-0)}`);
    assignValueToBooleanLabel(`\nBoolean(0n) === ${Boolean(0n)}`);
    assignValueToBooleanLabel(`\nBoolean(-0n) === ${Boolean(-0n)}`);

    assignValueToBooleanLabel(`\n\nBoolean('') === ${Boolean('')}`);
    assignValueToBooleanLabel(`\nBoolean("") === ${Boolean("")}`);
    assignValueToBooleanLabel(`\nBoolean(null) === ${Boolean(null)}`);
    assignValueToBooleanLabel(`\nBoolean(undefined) === ${Boolean(undefined)}`);
    assignValueToBooleanLabel(`\nBoolean(NaN) === ${Boolean(NaN)}`);
}

function assignValueToBooleanLabel(content){
    
    lblBooleanMethod.innerText += content;
}

function showDoubleNegationConversions(){
    
    assignValueToDoubleNegationLabel(`!!false === ${!!false}`);
    
    assignValueToDoubleNegationLabel(`\n\n!!0 === ${!!0}`);
    assignValueToDoubleNegationLabel(`\n!!-0 === ${!!-0}`);
    assignValueToDoubleNegationLabel(`\n!!0n === ${!!0n}`);
    assignValueToDoubleNegationLabel(`\n!!-0n === ${!!-0n}`);

    assignValueToDoubleNegationLabel(`\n\n!!'' === ${!!''}`);
    assignValueToDoubleNegationLabel(`\n!!"" === ${!!""}`);
    assignValueToDoubleNegationLabel(`\n!!null === ${!!null}`);
    assignValueToDoubleNegationLabel(`\n!!undefined === ${!!undefined}`);
    assignValueToDoubleNegationLabel(`\n!!NaN === ${!!NaN}`);
}

function assignValueToDoubleNegationLabel(content){
    
    lblDoubleNegation.innerText += content;
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

