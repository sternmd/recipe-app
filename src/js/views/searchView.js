import { elements, renderLoader } from './base';

export const getInput = () => elements.searchInput.value; // one line implicit return

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
};

// reduce title size to one line
const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, current) => {
      if (acc + current.length <= limit ) {
        newTitle.push(current);
      }
      return acc + current.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
}

const renderRecipe = recipe => {
  const markup = `
    <li>
        <a class="results__link" href="${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;

    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

// loop through array
export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
