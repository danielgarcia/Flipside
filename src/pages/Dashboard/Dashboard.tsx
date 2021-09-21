import * as React from 'react';
import { Currency } from '../../core/Currency';
import { getCurrencyTotals } from '../../usecases/getCurrencyTotals';
import CurrencyTable from '../components/CurrencyTable/CurrencyTable';

interface State {
    loading: boolean;
    search: string;
    error: string;
    currencies: Currency[];
    searchedCurrencies: Currency[];
}

class Dashboard extends React.Component<unknown, State> {
    public constructor(props: unknown) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // State of the component
    public readonly state: Readonly<State> = {
        loading: true,
        search: '',
        error: '',
        currencies: [],
        searchedCurrencies: [],
    };

    /**
     * Component did mount react lifecycle method.
     * @returns {Promise<void>}
     */
    async componentDidMount(): Promise<void> {
        const { currencies, error } = await getCurrencyTotals();
        this.setState({ currencies, error, searchedCurrencies: currencies, loading: false });
    }

    /**
     * Handles the submit of the form.
     * @param {React.FormEvent<HTMLFormElement>} e html form event.
     * @returns {Promise<void>}
     */
    private async onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        if (this.state.loading) return;
        const { currencies, search } = this.state;

        this.setState({ loading: true });
        const searchedCurrencies = currencies.filter((currency) => currency.name.toLowerCase().indexOf(search) !== -1);
        this.setState({ searchedCurrencies, loading: false });
    }

    /**
     * Handles the input change.
     * @param {React.ChangeEvent<HTMLInputElement>} e html input event.
     * @returns {void}
     */
    protected onChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ search: e.target.value });
    }

    // Main Render Function
    public render(): JSX.Element {
        const { searchedCurrencies, search, loading, error } = this.state;
        return (
            <div className="dashboard-page">
                <h1>Terra - Totals by Currency</h1>
                <form onSubmit={this.onSubmit} className="search-block">
                    <input type="text" value={search} onChange={this.onChange} disabled={loading} />
                    <button type="submit" aria-controls="submit" aria-label="submit" disabled={loading}>Search</button>
                </form>
                {error}
                <CurrencyTable currencies={searchedCurrencies} />
            </div>
        );
    }
}

export default Dashboard;
