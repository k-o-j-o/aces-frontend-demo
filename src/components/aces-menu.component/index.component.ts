import { 
    LitElement, 
    html
} from 'lit-element';
import { renderElement } from '@util';

@renderElement('aces-menu')
export class AcesMenu extends LitElement {
    render() {
        return html`
        <aside class="has-background-white-ter">
            yup
        </aside>
        `
    }
}