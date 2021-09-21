import * as React from 'react';
import { Currency } from '../../core/Currency';
import { getCurrencyTotals } from '../../usecases/getCurrencyTotals';

interface State {
    currencies: Currency[];
}

class Dashboard extends React.Component<unknown, State> {
    // State of the component
    public readonly state: Readonly<State> = {
        currencies: [],
    };

    /**
     * Component did mount react lifecycle method.
     * @returns {Promise<void>}
     */
    async componentDidMount(): Promise<void> {
        // Call API functions here to get data.
        const { currencies, error } = await getCurrencyTotals();
        this.setState({ currencies });
    }

    public renderRows(): JSX.Element[] {
        const { currencies } = this.state;
        const rows: JSX.Element[] = [];

        return currencies.map((currency, index) => (
            <tr key={`currency${index + 1}`}>
                <td>{currency.name}</td>
                <td>{currency.amount}</td>
                <td>3</td>
            </tr>
        ));
    }

    // Main Render Function
    public render(): JSX.Element {
        const { currencies } = this.state;
        return (
            <div className="dashboard-page">
                <h1>Terra - Totals by Currency</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Total Amount</th>
                            <th>Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Dashboard;
