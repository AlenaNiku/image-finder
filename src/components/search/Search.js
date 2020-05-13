import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {

    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '16521408-31fe7340522c407055b4dddb9',
        images: []
    }

    render() {
        return (
            <div>
                <TextField 
                    name="searchtext"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images"
                    fullWidth={true}
                />
                
                    <SelectField
                        name="amount"
                        floatingLabelText="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                        <MenuItem value={5} primaryText="5" />
                        <MenuItem value={10} primaryText="10" />
                        <MenuItem value={15} primaryText="15" />
                        <MenuItem value={30} primaryText="30" />
                        <MenuItem value={50} primaryText="50" />
                    </SelectField>
                
            </div>
        )
    }
}

export default Search
