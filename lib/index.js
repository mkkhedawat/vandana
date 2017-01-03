'use strict';
(() => {
    const chalk = require('chalk');

    const maa = require('./maa');
    const krishna = require('./krishna');
    const ganesha = require('./ganesha');
    const shiva = require('./shiva');

    function validateColor(color) {
        if (color == undefined) return -1;
        color = color.toLowerCase()
        switch (color) {
            case 'black' :
            case 'red' :
            case 'green' :
            case 'yellow' :
            case 'blue' :
            case 'white' :
            case 'magenta' :
            case 'cyan' :
            case 'gray' :
                return color;
                break;
            default:
                console.error("Color given is not supported. Proceeding with default");
                return -1;
        }
    }

    function maaVandana(color, text) {
        let txt = maa.vandana() + ( text == undefined ? " " : '\n\n' + text);
        let validColor = validateColor(color);
        let script = validColor == -1 ? txt : chalk[validColor](txt);
        console.log(script);
    }

    function shivaVandana(color, text) {
        let txt = shiva.vandana() + ( text == undefined ? " " : '\n\n' + text);
        let validColor = validateColor(color);
        let script = validColor == -1 ? txt : chalk[validColor](txt);
        console.log(script);
    }

    function krishnaVandana(color, text) {
        let txt = krishna.vandana() + ( text == undefined ? " " : '\n\n' + text);
        let validColor = validateColor(color);
        let script = validColor == -1 ? txt : chalk[validColor](txt);
        console.log(script);
    }

    function ganeshVandana(color, text) {
        let txt = ganesha.vandana() + ( text == undefined ? " " : '\n\n' + text);
        let validColor = validateColor(color);
        let script = validColor == -1 ? txt : chalk[validColor](txt);
        console.log(script);
    }

    const vandana = {
        'maa': maaVandana,
        'shiva': shivaVandana,
        'krishna': krishnaVandana,
        'ganesha': ganeshVandana,
        'chalk': chalk
    };
    module.exports = vandana;
})();
