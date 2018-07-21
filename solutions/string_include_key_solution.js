function stringIncludeKey(string, key) {
  if (!key.length) return true;

  let nextKeyChar = key[0];
  let keyIndex = string.indexOf(nextKeyChar);

  if (keyIndex < 0) return false;
  return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1))
}
