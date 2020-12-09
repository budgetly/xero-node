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
class PaymentService {
    static getAttributeTypeMap() {
        return PaymentService.attributeTypeMap;
    }
}
exports.PaymentService = PaymentService;
PaymentService.discriminator = undefined;
PaymentService.attributeTypeMap = [
    {
        "name": "paymentServiceID",
        "baseName": "PaymentServiceID",
        "type": "string"
    },
    {
        "name": "paymentServiceName",
        "baseName": "PaymentServiceName",
        "type": "string"
    },
    {
        "name": "paymentServiceUrl",
        "baseName": "PaymentServiceUrl",
        "type": "string"
    },
    {
        "name": "payNowText",
        "baseName": "PayNowText",
        "type": "string"
    },
    {
        "name": "paymentServiceType",
        "baseName": "PaymentServiceType",
        "type": "string"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=paymentService.js.map