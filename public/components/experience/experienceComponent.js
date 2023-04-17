import {experienceListAttributes} from "./experienceListAttributes.js";

customElements.define('experience-container',
  class extends HTMLElement {
    static get observedAttributes() {
        return experienceListAttributes;
    }

    constructor() {
      super();
      const template = document.getElementById('experience-template').content;

      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(template.cloneNode(true));
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if(newValue !== "undefined") this.shadowRoot.querySelector(`#${attribute}`).innerText += newValue;
    else this.shadowRoot.querySelector(`#${attribute}`).style.display = "none";
  }
});