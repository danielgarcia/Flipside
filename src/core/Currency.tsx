export interface ICurrencyTrend {
    amount: number;
    time: Date;
}

export interface ICurrency {
    name: string;
    amount: number;
    trend: ICurrencyTrend[];
}

class Currency {
    public constructor(currency?: ICurrency) {
        if (currency) {
            this.name = currency.name || '';
            this.amount = currency.amount || 0;
            this.trend = currency.trend || [];
        }
    }

    public name = '';

    public amount = 0;

    public trend: ICurrencyTrend[] = [];
}

export { Currency };
