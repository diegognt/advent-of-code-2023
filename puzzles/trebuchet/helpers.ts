const getFirstAndLastDigitsFromLine = (line: string): string => {
  let firstDigit = "";
  let lastDigit = "";
  let startCursor = 0;
  let endCursor = line.length - 1;

  while (startCursor <= endCursor) {
    if (!isNaN(Number(line[startCursor]))) {
      firstDigit = line[startCursor];
    } else {
      startCursor++;
    }

    if (!isNaN(Number(line[endCursor]))) {
      lastDigit = line[endCursor];
    } else {
      endCursor--;
    }

    if (firstDigit && lastDigit) {
      break;
    }
  }

  if (lastDigit === undefined && firstDigit !== undefined) {
    return firstDigit + firstDigit;
  }
  if (firstDigit === undefined && lastDigit !== undefined) {
    return lastDigit + lastDigit;
  }

  return firstDigit + lastDigit;
};

export default getFirstAndLastDigitsFromLine;
