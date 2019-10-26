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
    console.log(`Seach : ${text}`);
    //const rep = await axios.get("http://localhost/api/search");
    const rep = [
      {
        category: "V.A.T",
        descCat:
          "This topic is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa doloremque consequuntur."
      },
      {
        category: "Human Ressources",
        descCat:
          "This topic is about Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, esse!"
      },
      {
        category: "Retirement",
        descCat: "This topic is about Lorem ipsum dolor sit amet."
      },
      {
        category: "Seling",
        descCat:
          "This topic is about Lorem ipsum dolor sit amet consectetur adipisicing."
      }
    ];
    this.resultSearch = rep;
  }

  async fetchBasic(looking: string) {
    const rep = await axios.get(`http://localhost/api/${looking}`);
    return rep.data;
  }
}
