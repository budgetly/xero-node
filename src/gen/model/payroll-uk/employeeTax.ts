
export class EmployeeTax {
    /**
    * The Starter type.
    */
    'starterType'?: string;
    /**
    * Starter declaration.
    */
    'starterDeclaration'?: string;
    /**
    * The Tax code.
    */
    'taxCode'?: string;
    /**
    * Describes whether the tax settings is W1M1
    */
    'w1M1'?: boolean;
    /**
    * The previous taxable pay
    */
    'previousTaxablePay'?: number;
    /**
    * The tax amount previously paid
    */
    'previousTaxPaid'?: number;
    /**
    * The employee\'s student loan deduction type
    */
    'studentLoanDeduction'?: string;
    /**
    * Describes whether the employee has post graduate loans
    */
    'hasPostGraduateLoans'?: boolean;
    /**
    * Describes whether the employee is director
    */
    'isDirector'?: boolean;
    /**
    * The directorship start date
    */
    'directorshipStartDate'?: string;
    /**
    * NICs calculation method
    */
    'nicCalculationMethod'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "starterType",
            "baseName": "starterType",
            "type": "string"
        },
        {
            "name": "starterDeclaration",
            "baseName": "starterDeclaration",
            "type": "string"
        },
        {
            "name": "taxCode",
            "baseName": "taxCode",
            "type": "string"
        },
        {
            "name": "w1M1",
            "baseName": "w1M1",
            "type": "boolean"
        },
        {
            "name": "previousTaxablePay",
            "baseName": "previousTaxablePay",
            "type": "number"
        },
        {
            "name": "previousTaxPaid",
            "baseName": "previousTaxPaid",
            "type": "number"
        },
        {
            "name": "studentLoanDeduction",
            "baseName": "studentLoanDeduction",
            "type": "string"
        },
        {
            "name": "hasPostGraduateLoans",
            "baseName": "hasPostGraduateLoans",
            "type": "boolean"
        },
        {
            "name": "isDirector",
            "baseName": "isDirector",
            "type": "boolean"
        },
        {
            "name": "directorshipStartDate",
            "baseName": "directorshipStartDate",
            "type": "string"
        },
        {
            "name": "nicCalculationMethod",
            "baseName": "nicCalculationMethod",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeTax.attributeTypeMap;
    }
}

