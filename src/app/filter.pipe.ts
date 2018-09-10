import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        console.log(items);
        
        
        console.log( searchText);
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            console.log(it);
            
            return it.description.toLowerCase().includes(searchText) || it.title.toLowerCase().includes(searchText) || it.send_date.toLowerCase().includes(searchText) ||  it.subTitle.toLowerCase().includes(searchText) ;
        });
    }
}