import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="proceed-to-login"
export default class extends Controller {
  connect() {
    window.addEventListener('click', this.proceedToLogin);
  }

  proceedToLogin(){
    window.location.href = '/users/sign_in';
  }
}
