//Classes concretas que implementam a interface Order.

import { Order } from './product';

class ClothingOrder implements Order {
    calculateTotal(): void {
        console.log('Total calculated for clothing order');
    }

    generateInvoice(): void {
        console.log('Invoice generated for clothing order');
    }

    sendConfirmationEmail(): void {
        console.log('Email sent for clothing order');
    }
}

class ElectronicsOrder implements Order {
    calculateTotal(): void {
        console.log('Total calculated for electronics order');
    }

    generateInvoice(): void {
        console.log('Invoice generated for electronics order');
    }

    sendConfirmationEmail(): void {
        console.log('Email sent for electronics order');
    }
}

class FoodOrder implements Order {
    private valor: number = 32.50;

    calculateTotal() : number {
        console.log('Total calculated for food order');
        return 32.50;
    }

    generateInvoice(): number {
        console.log('Invoice generated for food order');
        return this.valor + 2.50;

    }

    sendConfirmationEmail(): void {
        console.log('Email sent for food order, valor: ' + this.valor);
    }
}

export { ClothingOrder, ElectronicsOrder, FoodOrder };