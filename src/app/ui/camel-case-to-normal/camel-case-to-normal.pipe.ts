import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToNormal'
})
export class CamelCaseToNormalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value
      .replace(/([A-Z]+[^A-Z])/g, match => ` ${match}`)
      .replace(/([A-Z]+)([A-Z][a-z]+)/g, (_, ...low) => `${low[0]} ${low[1]}`)
      .replace(/([a-z]+)([\dA-Z]+)/g, (_, ...low) => `${low[0]} ${low[1]}`)
      .trim()
      .replace(/([A-Z][a-z]+)/g, match => match.toLowerCase())
      .replace(/^./, match => match.toUpperCase());
  }

}
