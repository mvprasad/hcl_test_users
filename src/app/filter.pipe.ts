import { Pipe, PipeTransform } from '@angular/core';
import { User } from './modal/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<User> , ...args: any[]): Array<User> {
    return items.length > 0 && args[0] && args[1] ? items.filter(element => element[args[0]].toLowerCase().trim().indexOf(args[1].toLowerCase().trim()) >= 0) : items;
  }

}
