type Recette =  {
    strMeal: string,
    strMealThumb: string,
    strArea: string,
    strCategory: string,
    strIngredients: { strMeasure: string, name: string }[],
    strInstructions: string
    /*key: string*/
    idMeal: string
  }
  
export { type Recette };