import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Currency } from '../../../core/Currency';

type Props = {
    currency: Currency,
};

const CurrencyRow: React.FC<Props> = (props) => {
    const currency = props.currency.trend.map((trend) => trend.amount);
    return (
        <tr className="currency-row">
            <td>{props.currency.name}</td>
            <td>{props.currency.amount}</td>
            <td className="sparkline">
                <Sparklines data={currency} limit={10} width={260} height={90} margin={0}>
                    <SparklinesLine color="grey" />
                </Sparklines>
            </td>
        </tr>
    );
};

export default CurrencyRow;
