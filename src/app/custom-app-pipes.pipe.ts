import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customAppPipes'
})
export class CustomAppPipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const limit = args ? parseInt(args, 10) : 10;
    const trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
