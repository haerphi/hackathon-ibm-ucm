import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  loading: boolean;
  resultSearch: any;
  constructor() {}

  async search(text: string) {
    if (text.length > 0) {
      console.log(`Seach : ${text}`);
      let rep: any = await axios.get(
        `http://localhost/api/search?search=${text}`
      );
      console.log(rep.data);
      let respond = rep.data;
      this.resultSearch = [];
      for (let i = 0; respond.length; i++) {
        this.resultSearch.push({
          id: respond[i].id_question_pk,
          question: respond[i].question,
          job_domains: respond[i].job_domains,
          categories: respond[i].categories
        });
      }
    }
  }

  async fetchBasic(looking: string) {
    const rep = await axios.get(`http://localhost/api/${looking}`);
    return rep.data;
  }
}
