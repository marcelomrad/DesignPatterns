// Interface ou classe abstrata OrderFactory que define o método createOrder para criar objetos do tipo Order.

import { Order } from './product';

export abstract class OrderFactory {
    abstract createOrder(): Order;
}