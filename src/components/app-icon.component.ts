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
import bulmaIcon from 'bulma/sass/elements/icon.sass';
//@ts-ignore
import appIcon from '@styles/icon.scss';
//@ts-ignore
import fontAwesome from '@fortawesome/fontawesome-free/css/all.css';

@customElement('app-icon')
export class AppIcon extends LitElement {
    @property() icon: String = 'circle';
    @property({ 
        converter: (value) => `is-${value}`
    }) size: String = '';

    static get styles() {
        return [ 
            hostDisplay('inline-block'),
            thirdPartyCSS(bulmaIcon),
            thirdPartyCSS(appIcon),
            thirdPartyCSS(fontAwesome) 
        ];
    }

    render() {
        return html`
        <span class="icon ${this.size}">
            <i class="fas fa-${this.icon}"></i>
        </span>
        `
    }
}