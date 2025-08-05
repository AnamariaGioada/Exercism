// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
 return `NCC-${Math.random()* (9999-1000) + 9999}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  
  return (Math.random() * (42000-41000) + 41000);
   // return (Math.random() * (Math.floor(42000)-Math.ceil(41000)) + Math.ceil(41000));
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
 const classes_array = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  const array_length = classes_array.length 
  let random_index = Math.floor(Math.random() * array_length );
  return `${classes_array[random_index]}`;
}
