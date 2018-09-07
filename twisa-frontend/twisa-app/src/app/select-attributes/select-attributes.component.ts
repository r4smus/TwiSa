import { Component } from '@angular/core';
import { SelectAttribute } from '../select-attribute';
import { FormDataService } from '../data/form-data.service';

@Component({
    selector: 'app-select-attributes',
    templateUrl: './select-attributes.component.html',
    styleUrls: ['./select-attributes.component.css']
})
export class SelectAttributesComponent {
    availableSelectAtts: Array<SelectAttribute> = [];
    droppedSelectAtts: Array<SelectAttribute> = [];

    constructor(private formDataService: FormDataService) {
        this.availableSelectAtts.push(new SelectAttribute(1, 'Map', 'assets/images/Maps-icon.png'));
        this.availableSelectAtts.push(new SelectAttribute(2, 'Tweet-Text', 'assets/images/tweet-text.png'));
        this.availableSelectAtts.push(new SelectAttribute(3, 'Tweet-Source', 'assets/images/datasource.png'));
    }

    addToDroppedSelectAtts($event: any) {
        const newAttribute: SelectAttribute = $event.dragData;
        this.droppedSelectAtts.push(newAttribute);
        this.droppedSelectAtts.sort((a: SelectAttribute, b: SelectAttribute) => {
            return a.name.localeCompare(b.name);
        });
    }

    alreadyDraggedAndDropped(selectAttribute: SelectAttribute): boolean {
        return ! this.droppedSelectAtts.includes(selectAttribute);
    }

    save(): void {
        this.formDataService.setSelectAttributes(this.droppedSelectAtts);
        console.log('save()-method called');
    }
}

