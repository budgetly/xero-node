"use strict";
/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentTerm {
    static getAttributeTypeMap() {
        return PaymentTerm.attributeTypeMap;
    }
}
exports.PaymentTerm = PaymentTerm;
PaymentTerm.discriminator = undefined;
PaymentTerm.attributeTypeMap = [
    {
        "name": "bills",
        "baseName": "Bills",
        "type": "Bill"
    },
    {
        "name": "sales",
        "baseName": "Sales",
        "type": "Bill"
    }
];
//# sourceMappingURL=paymentTerm.js.map