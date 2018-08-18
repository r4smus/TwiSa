import { Component } from '@angular/core';
import { SelectAttribute } from '../select-attribute';

@Component({
    selector: 'app-select-attributes',
    templateUrl: './select-attributes.component.html',
    styleUrls: ['./select-attributes.component.css']
})
export class SelectAttributesComponent {
    availableSelectAtts: Array<SelectAttribute> = [];
    droppedSelectAtts: Array<SelectAttribute> = [];

    constructor() {
        this.availableSelectAtts.push(new SelectAttribute('Blue Shoes', 3, 35));
        this.availableSelectAtts.push(new SelectAttribute('Good Jacket', 1, 90));
        this.availableSelectAtts.push(new SelectAttribute('Red Shirt', 5, 12));
        this.availableSelectAtts.push(new SelectAttribute('Blue Jeans', 4, 60));
    }

    orderedProduct($event: any) {
        let orderedProduct: SelectAttribute = $event.dragData;
        orderedProduct.quantity--;
    }

    addToBasket($event: any) {
        let newProduct: SelectAttribute = $event.dragData;
        for (let indx in this.droppedSelectAtts) {
            let product: SelectAttribute = this.droppedSelectAtts[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.droppedSelectAtts.push(new SelectAttribute(newProduct.name, 1, newProduct.cost));
        this.droppedSelectAtts.sort((a: SelectAttribute, b: SelectAttribute) => {
            return a.name.localeCompare(b.name);
        });
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.droppedSelectAtts) {
            let product: SelectAttribute = this.droppedSelectAtts[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

