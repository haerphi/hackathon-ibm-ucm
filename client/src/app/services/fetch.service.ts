import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  loading: boolean;
  constructor() {}

  async search(text: string) {}
}
