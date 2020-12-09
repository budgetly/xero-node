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
/**
* Bank details for use on a batch payment stored with each contact
*/
class BatchPaymentDetails {
    static getAttributeTypeMap() {
        return BatchPaymentDetails.attributeTypeMap;
    }
}
exports.BatchPaymentDetails = BatchPaymentDetails;
BatchPaymentDetails.discriminator = undefined;
BatchPaymentDetails.attributeTypeMap = [
    {
        "name": "bankAccountNumber",
        "baseName": "BankAccountNumber",
        "type": "string"
    },
    {
        "name": "bankAccountName",
        "baseName": "BankAccountName",
        "type": "string"
    },
    {
        "name": "details",
        "baseName": "Details",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "Code",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "Reference",
        "type": "string"
    }
];
//# sourceMappingURL=batchPaymentDetails.js.map