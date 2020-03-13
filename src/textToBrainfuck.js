const textToBrainfuck = (text) => {
    let brainfucked = ''
    // Move pointer to byte 1
    brainfucked += '>'
    for (const letter of text) {
        brainfucked += '+'.repeat(letter.charCodeAt(0))
        brainfucked += '.'
        // This is me being lazy and abusing memory hahahahahaha
        brainfucked += '>'
    }
    
    return brainfucked.slice(0, -1)
}

export { textToBrainfuck }