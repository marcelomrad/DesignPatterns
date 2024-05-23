//Interface ou classe abstrata Order que define os métodos comuns a TODOS os pedidos.

export interface Order {
    calculateTotal(): void;
    generateInvoice(): void;
    sendConfirmationEmail(): void;
}