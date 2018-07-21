function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let encoded = ""

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      encoded += ' ';
      continue
    }

    const offset = (alphabet.indexOf(str[i]) + shift) % 26
    encoded += alphabet[offset]
  }

  return encoded
}
