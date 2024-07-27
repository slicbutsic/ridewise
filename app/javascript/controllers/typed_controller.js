import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js"

// Connects to data-controller="typed"
export default class extends Controller {

  static values = { strings: Array }

  connect() {
    setTimeout(() => this.typed(), 1800)
}

typed() {
  new Typed(this.element, {
  strings: this.stringsValue,
  typeSpeed: 70,
  showCursor: false
});
}

}
