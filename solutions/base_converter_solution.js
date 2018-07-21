function baseConverter(num, b) {
  if (num === 0) return "";

  const digits = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f'
  ];

  return baseConverter(Math.floor(num/b), b) + digits[num % b];
};
