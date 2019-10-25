import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  loading: boolean;
  constructor() {}

  async search(text: string) {
    console.log(text);
    const rep = await axios.get("http://localhost/api/pathsteps");
    console.log(rep);
  }
}
