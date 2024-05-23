//Exemplos de uso do padrão Factory

import { OrderFactory } from "./creator";
import { ClothingOrderFactory, ElectronicsOrderFactory, FoodOrderFactory } from "./concrete-creator";
import { FoodOrder } from "./concret-product";

class OrderProcessor {
    private orderFactory: OrderFactory;

    constructor(orderFactory: OrderFactory) {
        this.orderFactory = orderFactory;
    }

    processOrder(): void {
        const order = this.orderFactory.createOrder();

        if (order instanceof FoodOrder) {

            const total = order.calculateTotal();
            const invoice = order.generateInvoice();

            console.log('Total calculated for food order: ' + total);
            console.log('Invoice generated for food order: ' + invoice);

            order.sendConfirmationEmail();
        } else {

            order.calculateTotal();
            order.generateInvoice();
            order.sendConfirmationEmail();
        }
    }
}

function client() {
    const clothingOrderFactory = new ClothingOrderFactory();
    const electronicsOrderFactory = new ElectronicsOrderFactory();
    const foodOrderFactory = new FoodOrderFactory();

    const clothingOrderProcessor = new OrderProcessor(clothingOrderFactory);
    clothingOrderProcessor.processOrder();

    const electronicsOrderProcessor = new OrderProcessor(electronicsOrderFactory);
    electronicsOrderProcessor.processOrder();

    const foodOrderProcessor = new OrderProcessor(foodOrderFactory);
    foodOrderProcessor.processOrder();
}

client();