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
class SuperFunds {
    static getAttributeTypeMap() {
        return SuperFunds.attributeTypeMap;
    }
}
exports.SuperFunds = SuperFunds;
SuperFunds.discriminator = undefined;
SuperFunds.attributeTypeMap = [
    {
        "name": "superFunds",
        "baseName": "SuperFunds",
        "type": "Array<SuperFund>"
    }
];
//# sourceMappingURL=superFunds.js.map