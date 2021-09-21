import * as React from 'react';
import { Currency } from '../../core/Currency';

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
    }

    // Main Render Function
    public render(): JSX.Element {
        return (
            <div className="dashboard-page">
                <h1>Terra - Totals by Currency</h1>
            </div>
        );
    }
}

export default Dashboard;
