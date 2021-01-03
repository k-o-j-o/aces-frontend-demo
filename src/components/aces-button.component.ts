import { 
    LitElement, 
    customElement,
    property, 
    html
} from 'lit-element';
import { 
    hostDisplay, 
    thirdPartyCSS 
} from '../util';
//@ts-ignore
import buttonStyle from 'bulma/sass/elements/button.sass'

@customElement('aces-button')
export class AcesButton extends LitElement {
    @property({ 
        converter: (value) => `is-${value}`
    }) size: String = '';
    @property({
        converter: (value, type) => {
            console.log(type);
            return value;
        }
    }) type?: (String | Array<String>);

    static get styles() {
        return [ hostDisplay('inline-block'), thirdPartyCSS(buttonStyle) ];
    }

    render() {
        return html`
        <button class="button">
            <slot></slot>
        </button>
        `
    }
}