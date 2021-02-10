import { Amount } from '././amount';
import { ChargeType } from '././chargeType';

export class Task {
    /**
    * Identifier of the task.
    */
    'taskId'?: string;
    /**
    * Name of the task.
    */
    'name'?: string;
    'rate'?: Amount;
    'chargeType'?: ChargeType;
    /**
    * An estimated time to perform the task
    */
    'estimateMinutes'?: number;
    /**
    * Identifier of the project task belongs to.
    */
    'projectId'?: string;
    /**
    * Total minutes which have been logged against the task. Logged by assigning a time entry to a task
    */
    'totalMinutes'?: number;
    'totalAmount'?: Amount;
    /**
    * Minutes on this task which have been invoiced.
    */
    'minutesInvoiced'?: number;
    /**
    * Minutes on this task which have not been invoiced.
    */
    'minutesToBeInvoiced'?: number;
    /**
    * Minutes logged against this task if its charge type is `FIXED`.
    */
    'fixedMinutes'?: number;
    /**
    * Minutes logged against this task if its charge type is `NON_CHARGEABLE`.
    */
    'nonChargeableMinutes'?: number;
    'amountToBeInvoiced'?: Amount;
    'amountInvoiced'?: Amount;
    /**
    * Status of the task. When a task of ChargeType is `FIXED` and the rate amount is invoiced the status will be set to `INVOICED` and can\'t be modified. A task with ChargeType of `TIME` or `NON_CHARGEABLE` cannot have a status of `INVOICED`. A `LOCKED` state indicates that the task is currently changing state (for example being invoiced) and can\'t be modified.
    */
    'status'?: Task.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "taskId",
            "baseName": "taskId",
            "type": "string"
        },
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
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "totalMinutes",
            "baseName": "totalMinutes",
            "type": "number"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "Amount"
        },
        {
            "name": "minutesInvoiced",
            "baseName": "minutesInvoiced",
            "type": "number"
        },
        {
            "name": "minutesToBeInvoiced",
            "baseName": "minutesToBeInvoiced",
            "type": "number"
        },
        {
            "name": "fixedMinutes",
            "baseName": "fixedMinutes",
            "type": "number"
        },
        {
            "name": "nonChargeableMinutes",
            "baseName": "nonChargeableMinutes",
            "type": "number"
        },
        {
            "name": "amountToBeInvoiced",
            "baseName": "amountToBeInvoiced",
            "type": "Amount"
        },
        {
            "name": "amountInvoiced",
            "baseName": "amountInvoiced",
            "type": "Amount"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Task.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return Task.attributeTypeMap;
    }
}

export namespace Task {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        INVOICED = <any> 'INVOICED',
        LOCKED = <any> 'LOCKED'
    }
}
