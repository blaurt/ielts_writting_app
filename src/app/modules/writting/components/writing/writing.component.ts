import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-writing",
  templateUrl: "./writing.component.html",
  styleUrls: ["./writing.component.scss"]
})
export class WritingComponent implements OnInit {
  private static MIN_WORD_LENGTH = 3;
  public textareaContent: string = null;
  public form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public wordsCounted: number = 0;
  public WORDS_MIN_LIMIT = 250;

  onTextareaChange() {
    const separatedWords = this.textareaContent.split(" ");
    const filteredWords = separatedWords.filter(
      word => word.length >= WritingComponent.MIN_WORD_LENGTH
    );
    this.wordsCounted = filteredWords.length;
  }
}
