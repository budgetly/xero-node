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
class Receipts {
    static getAttributeTypeMap() {
        return Receipts.attributeTypeMap;
    }
}
exports.Receipts = Receipts;
Receipts.discriminator = undefined;
Receipts.attributeTypeMap = [
    {
        "name": "receipts",
        "baseName": "Receipts",
        "type": "Array<Receipt>"
    }
];
//# sourceMappingURL=receipts.js.map