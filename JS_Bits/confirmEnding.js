function confirmEnding(str1, str2) {
  let checkedStringLength = str1.length;
  let subStringLength = str2.length;
  let endingRangeStart = checkedStringLength - subStringLength;
  if (str1.substring(endingRangeStart, str1.length) === str2) {
    return true;
  } else {
    return false;
  }
}