import React from 'react';
import { Currency } from '../../../core/Currency';
import CurrencyRow from '../CurrencyRow/CurrencyRow';

type Props = {
    currencies: Currency[],
};

const CurrencyTable: React.FC<Props> = (props) => (
    <table className="currency-table">
        <thead>
            <tr>
                <th>Currency</th>
                <th>Total Amount</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            {props.currencies.map((currency, index) => <CurrencyRow currency={currency} key={`currency-table-${index + 1}`} />)}
        </tbody>
    </table>
);

export default CurrencyTable;
