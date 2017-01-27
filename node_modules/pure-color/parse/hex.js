function hex(hex) {
  if (hex.length === 4) {
    hex = '#' + hex.charAt(1) + hex.charAt(1) +
      hex.charAt(2) + hex.charAt(2) + 
      hex.charAt(3) + hex.charAt(3);
  }
  return [
    parseInt(hex.substring(1,3), 16),
    parseInt(hex.substring(3,5), 16),
    parseInt(hex.substring(5,7), 16)
  ];
}

module.exports = hex;