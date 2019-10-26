import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
  id: number = -1;
  info: any = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.getQuestion();
  }

  async getQuestion() {
    console.log("hello");
    const rep = await axios.get(
      `http://localhost/api/get_answer?id=${this.id}`
    );
    console.log(rep.data[0]);
    this.info = rep.data[0];
  }

  ngOnInit() {}
}
