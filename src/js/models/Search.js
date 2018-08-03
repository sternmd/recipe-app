import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
      this.query = query;
    }

    async getResults() {
      try {
          const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
          this.result = result.data.recipes;
          // console.log(this.result);
      } catch(err) {
          alert(err);
        }
    }
}
