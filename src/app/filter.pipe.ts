import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchInput: string): any[] {
    if(!items) return [];
    if(!searchInput || searchInput.length < 2) return items;
    let re1 = new RegExp("^(at least [1-5] stars+$)");
    let re2 = new RegExp("^(at most [1-5] stars+$)");
    let re3 = new RegExp("^([1-5] stars+$)");
    let re4 = new RegExp("^(after [1-2][0-9][0-9][0-9]+$)");
    let re5 = new RegExp("^(before [1-2][0-9][0-9][0-9]+$)");
    let re6 = new RegExp("^(older than [0-9] years+$)");
    let re7 = new RegExp("^(older than [0-9][0-9] years+$)");

    let regex = /[+-]?\d+(?:\.\d+)?/g;
    let match = regex.exec(searchInput);
    let numStar1 = 6;
    let numStar2 = 0;
  
    let numReleased1 = new Date().getFullYear() + 1;
    let numReleased2 = 1900;
    let numReleased3 = 1900;


    searchInput = searchInput.toLowerCase();

    if(re1.test(searchInput) || re3.test(searchInput)){
      numStar1 = Number(match[0]);
    } 
    if(re2.test(searchInput)){
      numStar2 = Number(match[0]);
    } 
    if(re4.test(searchInput)){
      numReleased1 = Number(match[0]);
    }
    if(re5.test(searchInput)){
      numReleased2 = Number(match[0]);
    }
    if(re6.test(searchInput) || re7.test(searchInput)){
      numReleased3 = Number(match[0]);
    }
  
    if(searchInput.length >= 2){
      
      return items.filter( item => {
        return item.Title.toLowerCase().includes(searchInput) || item.Description.toLowerCase().includes(searchInput)
        || item.Cast.toLowerCase().includes(searchInput) || (item.Rating >= numStar1) || (item.Rating <= numStar2)
        || (item.Released > numReleased1) || (item.Released < numReleased2) || (item.Released < (2019 - numReleased3))
      });
    }
  }
}


