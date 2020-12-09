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
class TrackingCategory {
    static getAttributeTypeMap() {
        return TrackingCategory.attributeTypeMap;
    }
}
exports.TrackingCategory = TrackingCategory;
TrackingCategory.discriminator = undefined;
TrackingCategory.attributeTypeMap = [
    {
        "name": "employeeGroupsTrackingCategoryID",
        "baseName": "employeeGroupsTrackingCategoryID",
        "type": "string"
    },
    {
        "name": "timesheetTrackingCategoryID",
        "baseName": "timesheetTrackingCategoryID",
        "type": "string"
    }
];
//# sourceMappingURL=trackingCategory.js.map