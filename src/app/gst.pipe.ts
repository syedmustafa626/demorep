import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gst'
})
export class GstPipe implements PipeTransform {

  transform(price: number): number {
    return price+(price*0.05);
  }

}
