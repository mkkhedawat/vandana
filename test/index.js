'use strict';

const assert = require('assert');
const vandana = require('../lib');

describe('vandana', function () {
    it('validate export function', function () {
        assert.notEqual(undefined, vandana.maa);
    });

    it('print all test cases', function () {
        vandana.maa();
        vandana.maa("blue");
        vandana.maa("green","May Maa Durga bless us !!");

        vandana.shiva();
        vandana.shiva("blue");
        vandana.shiva("green","May lord Shiva bless us !!");


        vandana.krishna();
        vandana.krishna("magenta");
        vandana.krishna("yellow","May lord Krishna bless us !!");

        vandana.ganesha();
        vandana.ganesha("cyan");
        vandana.ganesha("green","May Lord Ganesha bless us !!");
    });
});
