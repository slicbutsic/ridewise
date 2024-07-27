import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = ["pickUpAddressInput", "dropOffAddressInput", "form"]

  connect() {
    console.log(this.formTarget);
  }

  getPrices(event) {
    event.preventDefault();
    console.log(this.pickUpAddressInputTarget.value);
    console.log(this.dropOffAddressInputTarget.value);
    ;
  }

}
