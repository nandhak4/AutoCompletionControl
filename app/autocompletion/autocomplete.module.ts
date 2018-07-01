import { NgModule } from "@angular/core";
import { AutoCompleteComponent } from "./autocomplete.component";
import { AutoCompleteService } from "./autocomplete.service";
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[FormsModule, CommonModule],
    declarations:[AutoCompleteComponent],
    exports:[AutoCompleteComponent],
    providers: [ AutoCompleteService ]
})
export class AutoCompleteModule {

}