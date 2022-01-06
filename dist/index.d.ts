import { IConfig } from "./interfaces/IConfig";
import { Payment, ApiTest, Apm, Approval, BinNumber, Bkm, BkmInitialize, BouncedBankTransferList, Cancel, Card, CardList, CheckoutForm, CheckoutFormInitialize, Disapproval, InstallmentInfo, PaymentItem, PayoutCompletedTransactionList, PeccoInitialize, PeccoPayment, Refund, RefundToBalance, SettlementToBalance, SubMerchant, Subscription, SubscriptionCard, SubscriptionCheckoutForm, SubscriptionCustomer, SubscriptionExistingCustomer, SubscriptionPayment, SubscriptionPricingPlan, SubscriptionProduct, ThreedsInitialize, ThreedsPayment, UniversalCardStorageInitialize } from "./resources/services";
export * from "./enum";
export * from "./resources/services";
declare class Iyzipay {
    protected readonly config: IConfig;
    payment: Payment;
    apiTest: ApiTest;
    apm: Apm;
    approval: Approval;
    binNumber: BinNumber;
    bkm: Bkm;
    bkmInitialize: BkmInitialize;
    bouncedBankTransferList: BouncedBankTransferList;
    cancel: Cancel;
    card: Card;
    cardList: CardList;
    checkoutForm: CheckoutForm;
    checkoutFormInitialize: CheckoutFormInitialize;
    disapproval: Disapproval;
    installmentInfo: InstallmentInfo;
    paymentItem: PaymentItem;
    payoutCompletedTransactionList: PayoutCompletedTransactionList;
    peccoInitialize: PeccoInitialize;
    peccoPayment: PeccoPayment;
    refund: Refund;
    refundToBalance: RefundToBalance;
    settlementToBalance: SettlementToBalance;
    subMerchant: SubMerchant;
    subscription: Subscription;
    subscriptionCard: SubscriptionCard;
    subscriptionCheckoutForm: SubscriptionCheckoutForm;
    subscriptionCustomer: SubscriptionCustomer;
    subscriptionExistingCustomer: SubscriptionExistingCustomer;
    subscriptionPayment: SubscriptionPayment;
    subscriptionPricingPlan: SubscriptionPricingPlan;
    subscriptionProduct: SubscriptionProduct;
    threedsInitialize: ThreedsInitialize;
    threedsPayment: ThreedsPayment;
    universalCardStorageInitialize: UniversalCardStorageInitialize;
    constructor(config: IConfig);
}
export default Iyzipay;
