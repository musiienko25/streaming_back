import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class BasicPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Value before transformation:', value);
    // Perform some basic validation or transformation
    if (typeof value !== 'string') {
      throw new BadRequestException('Validation failed');
    }
    return value.toUpperCase(); // Example transformation
  }
}