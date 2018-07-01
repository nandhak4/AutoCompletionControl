import { Injectable } from "@angular/core";

@Injectable()
export class AutoCompleteService {

    GetValuesForAutoComplete(input: string): string[] {
        return input.length > 0 ? this.GetAllValues().filter(x => x.indexOf(input) > -1).slice(0, 10) : [];
    }

    GetAllValues(): string[] {
        var result: string[] = [];
        for (var i = 1; i <= 1000; i++)
            result.push(i.toString());
        return result;
    }

}