// Still need to check how to run it with React

class MyCustomTag extends HTMLELement {
  connectedCallback() {
    alert('hi from MyCustomTag')
  }
}

if (!customElements.get('my-custom-tag')) {
  customElements.define('my-custom-tag', MyCustomTag)
}
