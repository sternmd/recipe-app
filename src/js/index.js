// Global app controller
import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = 'ae0483932ce7c467c2f17050d06831dd';

  try {
      const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
      const recipes = result.data.recipes;
      console.log(recipes);
  } catch(err) {
      alert(err);
    }
}
