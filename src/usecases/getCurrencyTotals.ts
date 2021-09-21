import { Currency } from '../core/Currency';
import { getTransfers } from '../core/api/api';

type ICurrencyObject = {
    [key:string]: Currency;
};

/**
 * Gets all currencies sorted by Total Amount.
 * @returns {Promise<{ currencies: Currency[], error: string }>} returns currencies.
 */
async function getCurrencyTotals(): Promise<{ currencies: Currency[], error: string }> {
    const currenciesObj: ICurrencyObject = {};
    let currencies: Currency[] = [];
    let error = '';

    try {
        const response = await getTransfers();
        const transfers = response.data;

        for (let i = 0; i < transfers.length; i++) {
            const transfer = transfers[i];
            const name = transfer.EVENT_CURRENCY;
            const amount = transfer.EVENT_AMOUNT;
            const time = transfer.BLOCK_TIMESTAMP;

            if (!currenciesObj[name]) currenciesObj[name] = new Currency({ name, amount: 0, trend: [] });
            const currency = currenciesObj[name];

            currency.amount += amount;
            currency.trend.push({ amount, time });
            currencies = Object.values(currenciesObj);
        }
    } catch {
        error = 'Cannot load currencies';
    }

    return { currencies: currencies.sort((a, b) => a.amount - b.amount), error };
}

export { getCurrencyTotals };
