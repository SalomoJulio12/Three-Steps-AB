function threeStepsAB (text) {
    var result = false;
    for (var i = 0; i < text.length; i++) {
        // check if the character is 'a' and the character 4 steps to the right is 'b'
        if (text[i] === 'a' && text[i+4] === 'b') {
            result = true;
        }
    }
    return result;
}