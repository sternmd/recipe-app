import axios from 'axios';


export default class Search {
    constructor(query) {
      this.query = query;
    }

    async getResults() {
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const key = 'ae0483932ce7c467c2f17050d06831dd';

      try {
          const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
          this.result = result.data.recipes;
          // console.log(this.result);
      } catch(err) {
          alert(err);
        }
    }
}
