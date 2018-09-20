import { Component } from '@angular/core';
import { SelectAttribute } from '../enums/select-attribute';
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
        this.availableSelectAtts.push(SelectAttribute.Map);
        this.availableSelectAtts.push(SelectAttribute.TweetText);
        this.availableSelectAtts.push(SelectAttribute.TweetSource);
        this.availableSelectAtts.push(SelectAttribute.User);
        this.availableSelectAtts.push(SelectAttribute.Language);
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

