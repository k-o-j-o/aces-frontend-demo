import { 
    LitElement, 
    html,
    internalProperty
} from 'lit-element';
import { renderElement } from '@util';
//@ts-ignore
import './style.scss';

const MENU_ITEMS = [{
    name: 'Loans',
    icon: 'folder-open'
}, {
    name: 'Audits',
    icon: 'crosshairs'
}, {
    name: 'Loan Review',
    icon: 'check-square'
}, {
    name: 'Communication',
    icon: 'envelope'
}, {
    name: 'Reports',
    icon: 'chart-pie'
}, {
    name: 'Utilities',
    icon: 'wrench'
}, {
    name: 'Setup',
    icon: 'cogs'
}, {
    name: 'Aces Setup',
    icon: 'life-ring'
}];

@renderElement('aces-menu')
export class AcesMenu extends LitElement {
    @internalProperty() isOpen: boolean = true;

    constructor() {
        super();
        this.dataset.open = this.isOpen.toString();
    }

    render() {
        return html`
        <aside>
            <button id="toggle" class="box" @click="${this.toggleMenu}">
                <aces-icon icon="${this.isOpen ? 'chevron-left' : 'chevron-right'}"></aces-icon>
            </button>
            <nav>
                <ul>
                    ${MENU_ITEMS.map((menuItem) => html`
                        <li class="menu-item">
                            <aces-icon icon="${menuItem.icon}"></aces-icon>
                            <span>${menuItem.name}</span>
                        </li>
                    `)}
                </ul>
            </nav>
        </aside>
        `
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.dataset.open = this.isOpen.toString();
    }
}