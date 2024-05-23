// Classes concretas que implementam a interface OrderFactory e sobrescrevem o método createOrder

import { OrderFactory } from "./creator";
import { ClothingOrder, ElectronicsOrder, FoodOrder } from "./concret-product";

class ClothingOrderFactory extends OrderFactory {
    createOrder() {
        return new ClothingOrder();
    }
}

class ElectronicsOrderFactory extends OrderFactory {
    createOrder() {
        return new ElectronicsOrder();
    }
}

class FoodOrderFactory extends OrderFactory {
    createOrder() {
        return new FoodOrder();
    }
}


export { ClothingOrderFactory, ElectronicsOrderFactory, FoodOrderFactory };