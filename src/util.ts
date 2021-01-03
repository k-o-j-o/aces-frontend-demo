import { LitElement, css, unsafeCSS } from 'lit-element';

export function hostDisplay(display: string = 'inline-block') {
    return css`
        :host {
            display: ${unsafeCSS(display)}
        }
    `
}

export function thirdPartyCSS(style: String) {
    return css`${unsafeCSS(style)}`
}

export function renderElement(tagName: string) {
    return function(ctor: new () => LitElement) {
        const renderElement = class extends ctor {
            createRenderRoot() {
                return this;
            }
        } as any;
        window.customElements.define(tagName, renderElement);
    }
}