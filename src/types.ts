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
/*
  type Recette =  {
    nomRecette: string, // meal
    img: string,
    area: string,
    categorie: string,
    ingredients: { mesure: string, name: string }[],
    instructions: string
    key: string
  }
  */
  
export { type Recette };