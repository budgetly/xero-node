
export class BookDepreciationSetting {
    /**
    * The method of depreciation applied to this asset. See Depreciation Methods
    */
    'depreciationMethod'?: BookDepreciationSetting.DepreciationMethodEnum;
    /**
    * The method of averaging applied to this asset. See Averaging Methods
    */
    'averagingMethod'?: BookDepreciationSetting.AveragingMethodEnum;
    /**
    * The rate of depreciation (e.g. 0.05)
    */
    'depreciationRate'?: number;
    /**
    * Effective life of the asset in years (e.g. 5)
    */
    'effectiveLifeYears'?: number;
    /**
    * See Depreciation Calculation Methods
    */
    'depreciationCalculationMethod'?: BookDepreciationSetting.DepreciationCalculationMethodEnum;
    /**
    * Unique Xero identifier for the depreciable object
    */
    'depreciableObjectId'?: string;
    /**
    * The type of asset object
    */
    'depreciableObjectType'?: string;
    /**
    * Unique Xero identifier for the effective date change
    */
    'bookEffectiveDateOfChangeId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "depreciationMethod",
            "baseName": "depreciationMethod",
            "type": "BookDepreciationSetting.DepreciationMethodEnum"
        },
        {
            "name": "averagingMethod",
            "baseName": "averagingMethod",
            "type": "BookDepreciationSetting.AveragingMethodEnum"
        },
        {
            "name": "depreciationRate",
            "baseName": "depreciationRate",
            "type": "number"
        },
        {
            "name": "effectiveLifeYears",
            "baseName": "effectiveLifeYears",
            "type": "number"
        },
        {
            "name": "depreciationCalculationMethod",
            "baseName": "depreciationCalculationMethod",
            "type": "BookDepreciationSetting.DepreciationCalculationMethodEnum"
        },
        {
            "name": "depreciableObjectId",
            "baseName": "depreciableObjectId",
            "type": "string"
        },
        {
            "name": "depreciableObjectType",
            "baseName": "depreciableObjectType",
            "type": "string"
        },
        {
            "name": "bookEffectiveDateOfChangeId",
            "baseName": "bookEffectiveDateOfChangeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BookDepreciationSetting.attributeTypeMap;
    }
}

export namespace BookDepreciationSetting {
    export enum DepreciationMethodEnum {
        NoDepreciation = <any> 'NoDepreciation',
        StraightLine = <any> 'StraightLine',
        DiminishingValue100 = <any> 'DiminishingValue100',
        DiminishingValue150 = <any> 'DiminishingValue150',
        DiminishingValue200 = <any> 'DiminishingValue200',
        FullDepreciation = <any> 'FullDepreciation'
    }
    export enum AveragingMethodEnum {
        FullMonth = <any> 'FullMonth',
        ActualDays = <any> 'ActualDays'
    }
    export enum DepreciationCalculationMethodEnum {
        Rate = <any> 'Rate',
        Life = <any> 'Life',
        None = <any> 'None'
    }
}
