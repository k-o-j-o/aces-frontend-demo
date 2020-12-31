import { LitElement, customElement, html } from 'lit-element';

@customElement('hello-world')
export class HelloWorld extends LitElement {
    render() {
        return html`
            <div>Hello World!</div>
        `;
    }
}