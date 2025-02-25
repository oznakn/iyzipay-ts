import { IBody } from "../../../interfaces";
import { LOCALE, SUBSCRIPTION_INITIAL_STATUS } from "../../../enum";
import { IBillingAddress, IShippingAddress } from "..";
interface ICustomer {
    name: string;
    surname: string;
    identityNumber: string;
    email: string;
    gsmNumber: string;
    billingAddress: IBillingAddress & {
        district: string;
    };
    shippingAddress: IShippingAddress & {
        district: string;
    };
}
export interface ICreateSubscriptionCheckoutFormInitRequest extends IBody {
    locale: LOCALE | string;
    conversationId: string;
    callbackUrl: string;
    pricingPlanReferenceCode: string;
    subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS | string;
    customer: ICustomer;
}
export interface ISubscriptionCheckoutFormParam extends IBody {
    checkoutFormToken: string;
}
export {};
