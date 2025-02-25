"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESOURCE = exports.SUBSCRIPTION_INITIAL_STATUS = exports.SUBSCRIPTION_STATUS = exports.SUBSCRIPTION_UPGRADE_PERIOD = exports.SUBSCRIPTION_PRICING_PLAN_INTERVAL = exports.PLAN_PAYMENT_TYPE = exports.REFUND_REASON = exports.APM_TYPE = exports.CURRENCY = exports.SUB_MERCHANT_TYPE = exports.PAYMENT_CHANNEL = exports.BASKET_ITEM_TYPE = exports.PAYMENT_GROUP = exports.LOCALE = void 0;
var LOCALE;
(function (LOCALE) {
    LOCALE["TR"] = "tr";
    LOCALE["EN"] = "en";
})(LOCALE = exports.LOCALE || (exports.LOCALE = {}));
var PAYMENT_GROUP;
(function (PAYMENT_GROUP) {
    PAYMENT_GROUP["PRODUCT"] = "PRODUCT";
    PAYMENT_GROUP["LISTING"] = "LISTING";
    PAYMENT_GROUP["SUBSCRIPTION"] = "SUBSCRIPTION";
})(PAYMENT_GROUP = exports.PAYMENT_GROUP || (exports.PAYMENT_GROUP = {}));
var BASKET_ITEM_TYPE;
(function (BASKET_ITEM_TYPE) {
    BASKET_ITEM_TYPE["PHYSICAL"] = "PHYSICAL";
    BASKET_ITEM_TYPE["VIRTUAL"] = "VIRTUAL";
})(BASKET_ITEM_TYPE = exports.BASKET_ITEM_TYPE || (exports.BASKET_ITEM_TYPE = {}));
var PAYMENT_CHANNEL;
(function (PAYMENT_CHANNEL) {
    PAYMENT_CHANNEL["MOBILE"] = "MOBILE";
    PAYMENT_CHANNEL["WEB"] = "WEB";
    PAYMENT_CHANNEL["MOBILE_WEB"] = "MOBILE_WEB";
    PAYMENT_CHANNEL["MOBILE_IOS"] = "MOBILE_IOS";
    PAYMENT_CHANNEL["MOBILE_ANDROID"] = "MOBILE_ANDROID";
    PAYMENT_CHANNEL["MOBILE_WINDOWS"] = "MOBILE_WINDOWS";
    PAYMENT_CHANNEL["MOBILE_TABLET"] = "MOBILE_TABLET";
    PAYMENT_CHANNEL["MOBILE_PHONE"] = "MOBILE_PHONE";
})(PAYMENT_CHANNEL = exports.PAYMENT_CHANNEL || (exports.PAYMENT_CHANNEL = {}));
var SUB_MERCHANT_TYPE;
(function (SUB_MERCHANT_TYPE) {
    SUB_MERCHANT_TYPE["PERSONAL"] = "PERSONAL";
    SUB_MERCHANT_TYPE["PRIVATE_COMPANY"] = "PRIVATE_COMPANY";
    SUB_MERCHANT_TYPE["LIMITED_OR_JOINT_STOCK_COMPANY"] = "LIMITED_OR_JOINT_STOCK_COMPANY";
})(SUB_MERCHANT_TYPE = exports.SUB_MERCHANT_TYPE || (exports.SUB_MERCHANT_TYPE = {}));
var CURRENCY;
(function (CURRENCY) {
    CURRENCY["TRY"] = "TRY";
    CURRENCY["EUR"] = "EUR";
    CURRENCY["USD"] = "USD";
    CURRENCY["IRR"] = "IRR";
    CURRENCY["GBP"] = "GBP";
    CURRENCY["NOK"] = "NOK";
    CURRENCY["RUB"] = "RUB";
    CURRENCY["CHF"] = "CHF";
})(CURRENCY = exports.CURRENCY || (exports.CURRENCY = {}));
var APM_TYPE;
(function (APM_TYPE) {
    APM_TYPE["SOFORT"] = "SOFORT";
    APM_TYPE["IDEAL"] = "IDEAL";
    APM_TYPE["QIWI"] = "QIWI";
    APM_TYPE["GIROPAY"] = "GIROPAY";
})(APM_TYPE = exports.APM_TYPE || (exports.APM_TYPE = {}));
var REFUND_REASON;
(function (REFUND_REASON) {
    REFUND_REASON["DOUBLE_PAYMENT"] = "double_payment";
    REFUND_REASON["BUYER_REQUEST"] = "buyer_request";
    REFUND_REASON["FRAUD"] = "fraud";
    REFUND_REASON["OTHER"] = "other";
})(REFUND_REASON = exports.REFUND_REASON || (exports.REFUND_REASON = {}));
var PLAN_PAYMENT_TYPE;
(function (PLAN_PAYMENT_TYPE) {
    PLAN_PAYMENT_TYPE["RECURRING"] = "RECURRING";
})(PLAN_PAYMENT_TYPE = exports.PLAN_PAYMENT_TYPE || (exports.PLAN_PAYMENT_TYPE = {}));
var SUBSCRIPTION_PRICING_PLAN_INTERVAL;
(function (SUBSCRIPTION_PRICING_PLAN_INTERVAL) {
    SUBSCRIPTION_PRICING_PLAN_INTERVAL["DAILY"] = "DAILY";
    SUBSCRIPTION_PRICING_PLAN_INTERVAL["WEEKLY"] = "WEEKLY";
    SUBSCRIPTION_PRICING_PLAN_INTERVAL["MONTHLY"] = "MONTHLY";
    SUBSCRIPTION_PRICING_PLAN_INTERVAL["YEARLY"] = "YEARLY";
})(SUBSCRIPTION_PRICING_PLAN_INTERVAL = exports.SUBSCRIPTION_PRICING_PLAN_INTERVAL || (exports.SUBSCRIPTION_PRICING_PLAN_INTERVAL = {}));
var SUBSCRIPTION_UPGRADE_PERIOD;
(function (SUBSCRIPTION_UPGRADE_PERIOD) {
    SUBSCRIPTION_UPGRADE_PERIOD["NOW"] = "NOW";
    SUBSCRIPTION_UPGRADE_PERIOD["NEXT_PERIOD"] = "NEXT_PERIOD";
})(SUBSCRIPTION_UPGRADE_PERIOD = exports.SUBSCRIPTION_UPGRADE_PERIOD || (exports.SUBSCRIPTION_UPGRADE_PERIOD = {}));
var SUBSCRIPTION_STATUS;
(function (SUBSCRIPTION_STATUS) {
    SUBSCRIPTION_STATUS["EXPIRED"] = "EXPIRED";
    SUBSCRIPTION_STATUS["UNPAID"] = "UNPAID";
    SUBSCRIPTION_STATUS["CANCELED"] = "CANCELED";
    SUBSCRIPTION_STATUS["ACTIVE"] = "ACTIVE";
    SUBSCRIPTION_STATUS["PENDING"] = "PENDING";
    SUBSCRIPTION_STATUS["UPGRADED"] = "UPGRADED";
})(SUBSCRIPTION_STATUS = exports.SUBSCRIPTION_STATUS || (exports.SUBSCRIPTION_STATUS = {}));
var SUBSCRIPTION_INITIAL_STATUS;
(function (SUBSCRIPTION_INITIAL_STATUS) {
    SUBSCRIPTION_INITIAL_STATUS["ACTIVE"] = "ACTIVE";
    SUBSCRIPTION_INITIAL_STATUS["PENDING"] = "PENDING";
})(SUBSCRIPTION_INITIAL_STATUS = exports.SUBSCRIPTION_INITIAL_STATUS || (exports.SUBSCRIPTION_INITIAL_STATUS = {}));
var RESOURCE;
(function (RESOURCE) {
    RESOURCE[RESOURCE["RANDOM_STRING_SIZE"] = 8] = "RANDOM_STRING_SIZE";
    RESOURCE["RANDOM_HEADER_NAME"] = "x-iyzi-rnd";
    RESOURCE["CLIENT_VERSION"] = "x-iyzi-client-version";
    RESOURCE["AUTHORIZATION"] = "Authorization";
    RESOURCE["IYZI_WS_HEADER_NAME"] = "IYZWS";
    RESOURCE["IYZI_WS_HEADER_NAME_V2"] = "IYZWSv2";
    RESOURCE["SEPARATOR"] = ":";
})(RESOURCE = exports.RESOURCE || (exports.RESOURCE = {}));
//# sourceMappingURL=index.js.map