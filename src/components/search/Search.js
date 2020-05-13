import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {

    state = {
        searchValue: " ",
        amount: 15,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '16521408-31fe7340522c407055b4dddb9',
        images: []
    };

    // change state on every key press
    handleChange = e => {
        const { value } = e.target;
        this.setState({ searchValue: value }, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        });
    };

    render() {
        console.log(this.state.images)
        return (
          <div>
            <TextField
              id="outlined-search"
              label="Search Images"
              type="search"
              defaultValue={this.state.searchValue}
              onChange={this.handleChange}
              //   fullWidth={true}
            />

            {/* <SelectField
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
                    </SelectField> */}
          </div>
        );
    }
}

export default Search
