import { DeductionLine } from '././deductionLine';
import { EarningsLine } from '././earningsLine';
import { LeaveAccrualLine } from '././leaveAccrualLine';
import { LeaveEarningsLine } from '././leaveEarningsLine';
import { ReimbursementLine } from '././reimbursementLine';
import { SuperannuationLine } from '././superannuationLine';
import { TaxLine } from '././taxLine';

export class PayslipLines {
    'earningsLines'?: Array<EarningsLine>;
    'leaveEarningsLines'?: Array<LeaveEarningsLine>;
    'timesheetEarningsLines'?: Array<EarningsLine>;
    'deductionLines'?: Array<DeductionLine>;
    'leaveAccrualLines'?: Array<LeaveAccrualLine>;
    'reimbursementLines'?: Array<ReimbursementLine>;
    'superannuationLines'?: Array<SuperannuationLine>;
    'taxLines'?: Array<TaxLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earningsLines",
            "baseName": "EarningsLines",
            "type": "Array<EarningsLine>"
        },
        {
            "name": "leaveEarningsLines",
            "baseName": "LeaveEarningsLines",
            "type": "Array<LeaveEarningsLine>"
        },
        {
            "name": "timesheetEarningsLines",
            "baseName": "TimesheetEarningsLines",
            "type": "Array<EarningsLine>"
        },
        {
            "name": "deductionLines",
            "baseName": "DeductionLines",
            "type": "Array<DeductionLine>"
        },
        {
            "name": "leaveAccrualLines",
            "baseName": "LeaveAccrualLines",
            "type": "Array<LeaveAccrualLine>"
        },
        {
            "name": "reimbursementLines",
            "baseName": "ReimbursementLines",
            "type": "Array<ReimbursementLine>"
        },
        {
            "name": "superannuationLines",
            "baseName": "SuperannuationLines",
            "type": "Array<SuperannuationLine>"
        },
        {
            "name": "taxLines",
            "baseName": "TaxLines",
            "type": "Array<TaxLine>"
        }    ];

    static getAttributeTypeMap() {
        return PayslipLines.attributeTypeMap;
    }
}

