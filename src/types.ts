type Recette =  {
    nomRecette: string, // meal
    img: string,
    area: string,
    categorie: string,
    ingredients: { mesure: string, name: string }[],
    instructions: string
    /*key: string*/
  }
  
export { type Recette };