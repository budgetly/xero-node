"use strict";
/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class TaskCreateOrUpdate {
    static getAttributeTypeMap() {
        return TaskCreateOrUpdate.attributeTypeMap;
    }
}
exports.TaskCreateOrUpdate = TaskCreateOrUpdate;
TaskCreateOrUpdate.discriminator = undefined;
TaskCreateOrUpdate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "rate",
        "baseName": "rate",
        "type": "Amount"
    },
    {
        "name": "chargeType",
        "baseName": "chargeType",
        "type": "ChargeType"
    },
    {
        "name": "estimateMinutes",
        "baseName": "estimateMinutes",
        "type": "number"
    }
];
//# sourceMappingURL=taskCreateOrUpdate.js.map