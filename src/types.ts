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

/*
const meal = ref("");
const img = ref("");
const area = ref("");
const categorie = ref("");
const ingredients = reactive([{}]);
const instructions = ref("");
*/