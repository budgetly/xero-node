"use strict";
/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Reimbursements {
    static getAttributeTypeMap() {
        return Reimbursements.attributeTypeMap;
    }
}
exports.Reimbursements = Reimbursements;
Reimbursements.discriminator = undefined;
Reimbursements.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "reimbursements",
        "baseName": "reimbursements",
        "type": "Array<Reimbursement>"
    }
];
//# sourceMappingURL=reimbursements.js.map