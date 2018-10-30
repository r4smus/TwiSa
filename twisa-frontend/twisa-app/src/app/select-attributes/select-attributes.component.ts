import { Component } from '@angular/core';
import { SelectAttribute } from '../enums/select-attribute';
import { FormDataService } from '../data/form-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-select-attributes',
    templateUrl: './select-attributes.component.html',
    styleUrls: ['./select-attributes.component.css']
})
export class SelectAttributesComponent {
    generalSelectAtts: Array<SelectAttribute> = [];
    userSelectAtts: Array<SelectAttribute> = [];
    droppedSelectAtts: Array<SelectAttribute> = [];
    showErrorMessageNoAttributesSelected: boolean;
    showErrorMessageResultsOption: boolean;
    toogleSwitchModel: any = {
        onColor: 'success',
        offColor: 'danger',
        onText: 'Results on a map',
        offText: 'Results as list',
        disabled: false,
        size: '',
        value: null
      };
      tootleSwitchText = 'Show tweets on a map, or as a list?';

    constructor(private router: Router, private formDataService: FormDataService) {
        this.generalSelectAtts.push(SelectAttribute.TweetText);
        this.generalSelectAtts.push(SelectAttribute.TweetSource);
        this.generalSelectAtts.push(SelectAttribute.Language);
        this.generalSelectAtts.push(SelectAttribute.Hashtag);

        this.userSelectAtts.push(SelectAttribute.FollowerCount);
        this.userSelectAtts.push(SelectAttribute.TweetsCount);
        this.userSelectAtts.push(SelectAttribute.CreatedAt);
        this.userSelectAtts.push(SelectAttribute.Description);
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

    saveAndRoute(): void {
        if (this.droppedSelectAtts.length > 0 && this.toogleSwitchModel.value != null) {
            this.formDataService.setSelectAttributes(this.droppedSelectAtts);
            this.formDataService.setShowMap(this.toogleSwitchModel.value);
            this.router.navigate(['/conditions']);
        } else if(this.droppedSelectAtts.length === 0) {
            this.showErrorMessageResultsOption = false;
            this.showErrorMessageNoAttributesSelected = true;
        } else if(this.toogleSwitchModel.value === null || this.toogleSwitchModel.value === undefined) {
            this.showErrorMessageNoAttributesSelected = false;
            this.showErrorMessageResultsOption = true;
        }
    }

    addAllAttributes(): void {
        this.droppedSelectAtts = [ ...this.generalSelectAtts, ...this.userSelectAtts];
    }

    deleteAllAttributes(): void {
        this.droppedSelectAtts = [];
    }
}

