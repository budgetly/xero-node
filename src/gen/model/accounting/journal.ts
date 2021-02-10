import { JournalLine } from '././journalLine';

export class Journal {
    /**
    * Xero identifier
    */
    'journalID'?: string;
    /**
    * Date the journal was posted
    */
    'journalDate'?: string;
    /**
    * Xero generated journal number
    */
    'journalNumber'?: number;
    /**
    * Created date UTC format
    */
    'createdDateUTC'?: Date;
    /**
    * reference field for additional indetifying information
    */
    'reference'?: string;
    /**
    * The identifier for the source transaction (e.g. InvoiceID)
    */
    'sourceID'?: string;
    /**
    * The journal source type. The type of transaction that created the journal
    */
    'sourceType'?: Journal.SourceTypeEnum;
    /**
    * See JournalLines
    */
    'journalLines'?: Array<JournalLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "journalID",
            "baseName": "JournalID",
            "type": "string"
        },
        {
            "name": "journalDate",
            "baseName": "JournalDate",
            "type": "string"
        },
        {
            "name": "journalNumber",
            "baseName": "JournalNumber",
            "type": "number"
        },
        {
            "name": "createdDateUTC",
            "baseName": "CreatedDateUTC",
            "type": "Date"
        },
        {
            "name": "reference",
            "baseName": "Reference",
            "type": "string"
        },
        {
            "name": "sourceID",
            "baseName": "SourceID",
            "type": "string"
        },
        {
            "name": "sourceType",
            "baseName": "SourceType",
            "type": "Journal.SourceTypeEnum"
        },
        {
            "name": "journalLines",
            "baseName": "JournalLines",
            "type": "Array<JournalLine>"
        }    ];

    static getAttributeTypeMap() {
        return Journal.attributeTypeMap;
    }
}

export namespace Journal {
    export enum SourceTypeEnum {
        ACCREC = <any> 'ACCREC',
        ACCPAY = <any> 'ACCPAY',
        ACCRECCREDIT = <any> 'ACCRECCREDIT',
        ACCPAYCREDIT = <any> 'ACCPAYCREDIT',
        ACCRECPAYMENT = <any> 'ACCRECPAYMENT',
        ACCPAYPAYMENT = <any> 'ACCPAYPAYMENT',
        ARCREDITPAYMENT = <any> 'ARCREDITPAYMENT',
        APCREDITPAYMENT = <any> 'APCREDITPAYMENT',
        CASHREC = <any> 'CASHREC',
        CASHPAID = <any> 'CASHPAID',
        TRANSFER = <any> 'TRANSFER',
        ARPREPAYMENT = <any> 'ARPREPAYMENT',
        APPREPAYMENT = <any> 'APPREPAYMENT',
        AROVERPAYMENT = <any> 'AROVERPAYMENT',
        APOVERPAYMENT = <any> 'APOVERPAYMENT',
        EXPCLAIM = <any> 'EXPCLAIM',
        EXPPAYMENT = <any> 'EXPPAYMENT',
        MANJOURNAL = <any> 'MANJOURNAL',
        PAYSLIP = <any> 'PAYSLIP',
        WAGEPAYABLE = <any> 'WAGEPAYABLE',
        INTEGRATEDPAYROLLPE = <any> 'INTEGRATEDPAYROLLPE',
        INTEGRATEDPAYROLLPT = <any> 'INTEGRATEDPAYROLLPT',
        EXTERNALSPENDMONEY = <any> 'EXTERNALSPENDMONEY',
        INTEGRATEDPAYROLLPTPAYMENT = <any> 'INTEGRATEDPAYROLLPTPAYMENT',
        INTEGRATEDPAYROLLCN = <any> 'INTEGRATEDPAYROLLCN'
    }
}
