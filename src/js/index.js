import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
const state = {};

const controlSearch = async () => {
  // 1) get query from the viewport
  const query = searchView.getInput();

  if (query) {
      // 2) new search object and add it to state
      state.search = new Search(query);

      // 3) Prepare UI for results (clear input, results)
      searchView.clearInput();
      searchView.clearResults();
      renderLoader(elements.searchResult);
      // 4) search for rescipes
      await state.search.getResults();

      // 5) Render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
  }

}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResultPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// Recipe Controller
const r = new Recipe(46956);
r.getRecipe();
console.log(r)
