// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  
  const first_number =Number(array1.join('')) ;
  const second_number = Number(array2.join(''));
  
  return first_number + second_number;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const string_value = value.toString();
  const array_value = string_value.split('');
  const reversed_array = array_value.reverse();
  const reversed_value = Number(reversed_array.join(''));
  return reversed_value===value
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  console.log(input);
  if (input === '' || !input){
    return 'Required field';
  }
  const input_number = Number(input);
  if (Number.isNaN(input_number) || input_number === 0){
    return 'Must be a number besides 0';
  }
  return '';
}
