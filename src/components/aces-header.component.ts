import { 
    LitElement,
    property, 
    html 
} from 'lit-element';
import { renderElement } from '../util';

@renderElement('aces-header')
export class AcesHeader extends LitElement {
    @property() database: String = "[DB_Name]";

    render() {
        return html`
            <header class="box">
                <aces-icon icon="user"></aces-icon>
                <aces-button>Hello</aces-button>
            </header>
        `;
    }
}