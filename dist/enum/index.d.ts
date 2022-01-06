export declare enum LOCALE {
    TR = "tr",
    EN = "en"
}
export declare enum PAYMENT_GROUP {
    PRODUCT = "PRODUCT",
    LISTING = "LISTING",
    SUBSCRIPTION = "SUBSCRIPTION"
}
export declare enum BASKET_ITEM_TYPE {
    PHYSICAL = "PHYSICAL",
    VIRTUAL = "VIRTUAL"
}
export declare enum PAYMENT_CHANNEL {
    MOBILE = "MOBILE",
    WEB = "WEB",
    MOBILE_WEB = "MOBILE_WEB",
    MOBILE_IOS = "MOBILE_IOS",
    MOBILE_ANDROID = "MOBILE_ANDROID",
    MOBILE_WINDOWS = "MOBILE_WINDOWS",
    MOBILE_TABLET = "MOBILE_TABLET",
    MOBILE_PHONE = "MOBILE_PHONE"
}
export declare enum SUB_MERCHANT_TYPE {
    PERSONAL = "PERSONAL",
    PRIVATE_COMPANY = "PRIVATE_COMPANY",
    LIMITED_OR_JOINT_STOCK_COMPANY = "LIMITED_OR_JOINT_STOCK_COMPANY"
}
export declare enum CURRENCY {
    TRY = "TRY",
    EUR = "EUR",
    USD = "USD",
    IRR = "IRR",
    GBP = "GBP",
    NOK = "NOK",
    RUB = "RUB",
    CHF = "CHF"
}
export declare enum APM_TYPE {
    SOFORT = "SOFORT",
    IDEAL = "IDEAL",
    QIWI = "QIWI",
    GIROPAY = "GIROPAY"
}
export declare enum REFUND_REASON {
    DOUBLE_PAYMENT = "double_payment",
    BUYER_REQUEST = "buyer_request",
    FRAUD = "fraud",
    OTHER = "other"
}
export declare enum PLAN_PAYMENT_TYPE {
    RECURRING = "RECURRING"
}
export declare enum SUBSCRIPTION_PRICING_PLAN_INTERVAL {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY"
}
export declare enum SUBSCRIPTION_UPGRADE_PERIOD {
    NOW = "NOW",
    NEXT_PERIOD = "NEXT_PERIOD"
}
export declare enum SUBSCRIPTION_STATUS {
    EXPIRED = "EXPIRED",
    UNPAID = "UNPAID",
    CANCELED = "CANCELED",
    ACTIVE = "ACTIVE",
    PENDING = "PENDING",
    UPGRADED = "UPGRADED"
}
export declare enum SUBSCRIPTION_INITIAL_STATUS {
    ACTIVE = "ACTIVE",
    PENDING = "PENDING"
}
export declare enum RESOURCE {
    RANDOM_STRING_SIZE = 8,
    RANDOM_HEADER_NAME = "x-iyzi-rnd",
    CLIENT_VERSION = "x-iyzi-client-version",
    AUTHORIZATION = "Authorization",
    IYZI_WS_HEADER_NAME = "IYZWS",
    IYZI_WS_HEADER_NAME_V2 = "IYZWSv2",
    SEPARATOR = ":"
}
