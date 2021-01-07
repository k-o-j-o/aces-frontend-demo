import {
    LitElement,
    customElement,
    html,
    property
} from 'lit-element';
import {
    hostDisplay,
    thirdPartyCSS
} from '@util';
//@ts-ignore
import bulmaPanel from 'bulma/sass/components/panel.sass';
//@ts-ignore
import acesPanel from '@styles/panel.scss';

@customElement('aces-panel')
export class AcesPanel extends LitElement {
    @property() heading?: string;

    static get styles() {
        return [
            hostDisplay('inline-block'),
            thirdPartyCSS(bulmaPanel),
            thirdPartyCSS(acesPanel)
        ]
    }

    render() {
        return html`
        <div class="panel">
            ${this.heading
                ? html`<h2 class="panel-heading">${this.heading}</h2>`
                : ''
            }
            <p class="panel-block">
                <slot></slot>
            </p>
        </div>
        `
    }
}