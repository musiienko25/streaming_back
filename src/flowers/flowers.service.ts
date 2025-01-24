import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
    findAll() {
        return [{ id: 1, name: 'rose', price: 123 }, { id: 2, name: 'tulip' }, { id: 3, name: 'julia' }]
    }
}
