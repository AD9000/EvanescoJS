const endProgram = () => {
    return '\n\n'
}

const pushOntoStack = (letter) => {
    return '   ' + (letter.charCodeAt(0).toString(2)).replace(/1/g, '\t').replace(/0/g, ' ') + '\n'
}

const printLetter = () => {
    return '\t\n  '
}

const textToWhitespace = (text) => {
    let program = ''
    for (const letter of text) {
        program += pushOntoStack(letter)
        program += printLetter()
    }

    program += endProgram()
    return program
}

export { textToWhitespace }