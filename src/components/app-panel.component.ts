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
import appPanel from '@styles/panel.scss';

@customElement('app-panel')
export class AppPanel extends LitElement {
    @property() heading?: string;

    static get styles() {
        return [
            hostDisplay('inline-block'),
            thirdPartyCSS(bulmaPanel),
            thirdPartyCSS(appPanel)
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