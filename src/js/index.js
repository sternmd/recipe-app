import Search from './models/Search';

// Global state of the app
const state = {};

const controlSearch = async () => {
  // 1) get query from the viewport
  const query = 'pizza';

  if (query) {
      // 2) new search object and add it to state
      state.search = new Search(query);

      // 3) Prepare UI for results__btn

      // 4) search for rescipes
      await state.search.getResults();

      // 5) Render results on UI
      console.log(state.search.result);
  }

}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

const search = new Search('pizza');
console.log(search)
search.getResults();
