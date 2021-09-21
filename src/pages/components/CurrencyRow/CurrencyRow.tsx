import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Currency } from '../../../core/Currency';

type Props = {
    currency: Currency,
};

const CurrencyRow: React.FC<Props> = (props) => {
    const currency = props.currency.trend.map((trend) => trend.amount);
    return (
        <tr>
            <td>{props.currency.name}</td>
            <td>{props.currency.amount}</td>
            <td>
                <Sparklines data={currency} limit={5} width={100} height={20} margin={5}>
                    <SparklinesLine color="grey" />
                </Sparklines>
            </td>
        </tr>
    );
};

export default CurrencyRow;
