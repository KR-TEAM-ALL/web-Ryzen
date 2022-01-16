/*!
 * wow.js v0.0.1
 * (c) 2022 Yuka
 * Released under the MIT License.
 */
function newCustomElement(element){
  customElements.define(`new-${element.name}`, class extends HTMLElement {
    connectedCallback() {
      if (element.code){
        eval(element.code)
      }
      if (element.return){
        this.innerHTML = `${element.return}`
      }
    }
  });
  var vstyle = document.createElement('style');
  document.head.appendChild(vstyle);
  vstyle.sheet.insertRule(`new-${element.name}{${element.style}}`);
}