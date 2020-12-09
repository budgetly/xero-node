"use strict";
/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}
exports.BankAccount = BankAccount;
BankAccount.discriminator = undefined;
BankAccount.attributeTypeMap = [
    {
        "name": "statementText",
        "baseName": "StatementText",
        "type": "string"
    },
    {
        "name": "accountName",
        "baseName": "AccountName",
        "type": "string"
    },
    {
        "name": "bSB",
        "baseName": "BSB",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "AccountNumber",
        "type": "string"
    },
    {
        "name": "remainder",
        "baseName": "Remainder",
        "type": "boolean"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    }
];
//# sourceMappingURL=bankAccount.js.map