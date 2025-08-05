// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((value) => value * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  
  return deck.reduce((accumulator, currentValue)=> {
    accumulator.push(currentValue);
    if(currentValue===3){
      return accumulator.concat([3,3])
    }
    return accumulator;
  },[])
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  console.log(deck);
 const startIndex = deck[deck.length/2-1];
  const endIndex = deck[deck.length/2];
 const newDeck= [startIndex, endIndex];
  return newDeck;
  
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const firstHalf = deck.slice(0, deck.length/2);
  const secondHalf = deck.slice(deck.length/2, deck.length);
  const firstElement = firstHalf[0];
  const lastElement = secondHalf[secondHalf.length-1];
  const newMiddle = [lastElement, firstElement];
  const newDeck = firstHalf.concat(newMiddle.concat(secondHalf));
  return newDeck.slice(1, newDeck.length-1);
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((item)=>item===2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b)=>a-b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
