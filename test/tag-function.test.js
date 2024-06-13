import {tagFunction} from "../src/tag-function.js";

test('test tag function', () => {
    let name = 'Bangkit Juang Raharjo';

    tagFunction`Hello ${name}, how are you?`;
    tagFunction`good morning ${name}`;
});