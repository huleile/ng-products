import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'RMB'
})
export class RMBPipe implements PipeTransform {
    transform(price: number): string {
        return `￥: ${price}`;
    }
}
