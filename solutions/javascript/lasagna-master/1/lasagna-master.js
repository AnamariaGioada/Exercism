/// <reference path="./global.d.ts" />
// @ts-check
export function cookingStatus(remainingTime){
  if (remainingTime === 0){
    return 'Lasagna is done.';
  }
  else if (remainingTime > 0) {
    return 'Not done, please wait.'
  }
  return 'You forgot to set the timer.'
}
export function preparationTime(layers, timePerLayer){
  if(timePerLayer){
  return layers.length * timePerLayer;
  }
  return layers.length * 2;
}

export function quantities(layers){
  const noodles_array = layers.filter((layer)=>layer ==='noodles');
  const layers_of_noodles = noodles_array.length;
  const sauce_array = layers.filter((layer) => layer === 'sauce');
  const layers_of_sauce = sauce_array.length;
  return {
    noodles: layers_of_noodles * 50,
    sauce: layers_of_sauce * 0.2
  }
}

export function addSecretIngredient(friendsList, myList) {
  const secret_ingredient = friendsList.slice(-1)[0];
  myList.push(secret_ingredient);
}

export function scaleRecipe(recipe, numberOfPortions){
  let new_recipe = {};
  for (let key in recipe){
    new_recipe[key] = numberOfPortions/2 * recipe[key]
  }
  return new_recipe;
}
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
