"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iyzipay = void 0;
const tslib_1 = require("tslib");
const services_1 = require("./resources/services");
(0, tslib_1.__exportStar)(require("./enum"), exports);
(0, tslib_1.__exportStar)(require("./resources/services"), exports);
class Iyzipay {
    config;
    payment;
    apiTest;
    apm;
    approval;
    binNumber;
    bkm;
    bkmInitialize;
    bouncedBankTransferList;
    cancel;
    card;
    cardList;
    checkoutForm;
    checkoutFormInitialize;
    disapproval;
    installmentInfo;
    paymentItem;
    payoutCompletedTransactionList;
    peccoInitialize;
    peccoPayment;
    refund;
    refundToBalance;
    settlementToBalance;
    subMerchant;
    subscription;
    subscriptionCard;
    subscriptionCheckoutForm;
    subscriptionCustomer;
    subscriptionExistingCustomer;
    subscriptionPayment;
    subscriptionPricingPlan;
    subscriptionProduct;
    threedsInitialize;
    threedsPayment;
    universalCardStorageInitialize;
    constructor(config) {
        this.config = config;
        this.payment = new services_1.Payment(config);
        this.apiTest = new services_1.ApiTest(config);
        this.apm = new services_1.Apm(config);
        this.approval = new services_1.Approval(config);
        this.binNumber = new services_1.BinNumber(config);
        this.bkm = new services_1.Bkm(config);
        this.bkmInitialize = new services_1.BkmInitialize(config);
        this.bouncedBankTransferList = new services_1.BouncedBankTransferList(config);
        this.cancel = new services_1.Cancel(config);
        this.card = new services_1.Card(config);
        this.cardList = new services_1.CardList(config);
        this.checkoutForm = new services_1.CheckoutForm(config);
        this.checkoutFormInitialize = new services_1.CheckoutFormInitialize(config);
        this.disapproval = new services_1.Disapproval(config);
        this.installmentInfo = new services_1.InstallmentInfo(config);
        this.paymentItem = new services_1.PaymentItem(config);
        this.payoutCompletedTransactionList = new services_1.PayoutCompletedTransactionList(config);
        this.peccoInitialize = new services_1.PeccoInitialize(config);
        this.peccoPayment = new services_1.PeccoPayment(config);
        this.refund = new services_1.Refund(config);
        this.refundToBalance = new services_1.RefundToBalance(config);
        this.settlementToBalance = new services_1.SettlementToBalance(config);
        this.subMerchant = new services_1.SubMerchant(config);
        this.subscription = new services_1.Subscription(config);
        this.subscriptionCard = new services_1.SubscriptionCard(config);
        this.subscriptionCustomer = new services_1.SubscriptionCustomer(config);
        this.subscriptionPayment = new services_1.SubscriptionPayment(config);
        this.subscriptionPricingPlan = new services_1.SubscriptionPricingPlan(config);
        this.subscriptionProduct = new services_1.SubscriptionProduct(config);
        this.threedsInitialize = new services_1.ThreedsInitialize(config);
        this.threedsPayment = new services_1.ThreedsPayment(config);
        this.universalCardStorageInitialize = new services_1.UniversalCardStorageInitialize(config);
    }
}
exports.Iyzipay = Iyzipay;
exports.default = Iyzipay;
//# sourceMappingURL=index.js.map