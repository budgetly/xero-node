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
class PurchaseOrders {
    static getAttributeTypeMap() {
        return PurchaseOrders.attributeTypeMap;
    }
}
exports.PurchaseOrders = PurchaseOrders;
PurchaseOrders.discriminator = undefined;
PurchaseOrders.attributeTypeMap = [
    {
        "name": "purchaseOrders",
        "baseName": "PurchaseOrders",
        "type": "Array<PurchaseOrder>"
    }
];
//# sourceMappingURL=purchaseOrders.js.map