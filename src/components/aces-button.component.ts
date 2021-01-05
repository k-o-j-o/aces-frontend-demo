import { 
    LitElement, 
    customElement,
    property, 
    html
} from 'lit-element';
import { 
    hostDisplay, 
    thirdPartyCSS 
} from '@util';
//@ts-ignore
import bulmaButton from 'bulma/sass/elements/button.sass';
//@ts-ignore
import acesButton from '@styles/button.scss';

@customElement('aces-button')
export class AcesButton extends LitElement {
    @property({ 
        converter: (value) => `is-${value}`
    }) size: String = '';

    @property({
        converter: (value) => 
            value
                ?.split(/\s/)
                .filter((mod) => !!mod)
                .map((mod) => `is-${mod}`)
                .join(' ')
    }) type?: String;

    static get styles() {
        return [ 
            hostDisplay('inline-block'),
            thirdPartyCSS(acesButton), 
            thirdPartyCSS(bulmaButton) 
        ];
    }

    render() {
        return html`
        <button class="button ${this.type}">
            <slot></slot>
        </button>
        `
    }
}