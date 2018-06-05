
  export const arraySum = (arrayOfNumbers) => {
    let result = 0;
     for (const arrayElement of arrayOfNumbers) {
      if (typeof arrayElement !== 'number') {
        return 'Numbers needed';
      } else {
        result += arrayElement;
      }
    };
    return result;
  }