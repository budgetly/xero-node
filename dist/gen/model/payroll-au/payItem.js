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
class PayItem {
    static getAttributeTypeMap() {
        return PayItem.attributeTypeMap;
    }
}
exports.PayItem = PayItem;
PayItem.discriminator = undefined;
PayItem.attributeTypeMap = [
    {
        "name": "earningsRates",
        "baseName": "EarningsRates",
        "type": "Array<EarningsRate>"
    },
    {
        "name": "deductionTypes",
        "baseName": "DeductionTypes",
        "type": "Array<DeductionType>"
    },
    {
        "name": "leaveTypes",
        "baseName": "LeaveTypes",
        "type": "Array<LeaveType>"
    },
    {
        "name": "reimbursementTypes",
        "baseName": "ReimbursementTypes",
        "type": "Array<ReimbursementType>"
    }
];
//# sourceMappingURL=payItem.js.map