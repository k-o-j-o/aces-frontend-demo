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
import appButton from '@styles/button.scss';

@customElement('app-button')
export class AppButton extends LitElement {
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
            thirdPartyCSS(appButton), 
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