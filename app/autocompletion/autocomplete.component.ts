import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { AutoCompleteService } from './autocomplete.service';
import { ISearchForm } from './searchForm.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'auto-complete',
    templateUrl: 'app/autocompletion/autocomplete.component.html'
})
export class AutoCompleteComponent implements OnInit {

    @ViewChild('searchForm') currentForm: NgForm
    @ViewChild('searchBox') currentBox: ElementRef

    @Input() source: string;
    @Input() width: number;
    @Output() selectedValue = new EventEmitter();
    result: string[] = [];

    constructor(private autoCompleteService: AutoCompleteService) {

    }

    ngOnInit(): void {

    }

    updateInput(currentValue: string) {
        this.currentForm.controls.searchInput.setValue(currentValue);
        this.result = [];
        this.selectedValue.emit(currentValue);
    }

    search(searchForm: ISearchForm) {
        if (searchForm != null && searchForm.searchInput != null)
            this.result = this.autoCompleteService.GetValuesForAutoComplete(searchForm.searchInput);
    }

    getInputStyle(): any {
        if (this.width != 0)
            return { width: this.width };
        return {}
    }

    getCollectionStyle(): any {
        var inputElement = ((this.currentBox.nativeElement) as HTMLInputElement);
        var width = (this.width !== 0) ? this.width : inputElement.offsetWidth;

        if (this.result.length > 0)
            return { border: '1px solid black', width: width };
        return {};
    }
}