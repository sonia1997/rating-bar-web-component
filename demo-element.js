import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../rating-bar.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
          font-family: sans-serif;
          --rating-bar-color: lightgrey;
          --rating-bar-outline-color: black;
          --rating-bar-pressed-color: yellow;
}
    </style>

<center>
      <h3>Sample rating bar web component</h3>
      <rating-bar toggle-icon="star" pressed></rating-bar>
      <rating-bar toggle-icon="star"></rating-bar>
      <rating-bar toggle-icon="star"></rating-bar>
      <rating-bar toggle-icon="star"></rating-bar>
      <rating-bar toggle-icon="star"></rating-bar>
</center>

      <!-- <h3>Data-bound icon-toggle</h3> -->

      <!-- use a computed binding to generate the message -->
      <!-- <div><span>[[_message(isFav)]]</span></div> -->

      <!-- curly brackets ({{}}} allow two-way binding -->
      <!-- <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle> -->
    `;
  }
  // _message(fav) {
  //   if (fav) {
  //     return 'You really like me!';
  //   }
  //   else {
  //     return 'Do you like me?';
  //   }
  // }
}
customElements.define('demo-element', DemoElement);
