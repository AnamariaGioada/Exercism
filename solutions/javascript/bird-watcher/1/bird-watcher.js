// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
  let total_birds = 0;
  for (let i=0; i<birdsPerDay.length; i++){
    total_birds+=birdsPerDay[i];
  }
  return total_birds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
  let start_index = (week-1)*7;
  let end_index = week * 7;
  console.log(birdsPerDay);
  const week_count = Array.from(birdsPerDay).slice(start_index, end_index);
  
  const birds_per_week = totalBirdCount(week_count);
  return birds_per_week;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  console.log(birdsPerDay.length);
  for (let i=0; i<birdsPerDay.length; i++){
    if (i%2 === 0){
      birdsPerDay[i]+=1;
    }
  }
  return birdsPerDay;
}
