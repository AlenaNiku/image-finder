import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
  state = {
    searchValue: " ",
    amount: 15,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "16521408-31fe7340522c407055b4dddb9",
    images: [],
  };

  // change state on every key press
  handleChange = (e) => {
    const val = e.target.value;
    this.setState({ searchValue: val }, () => {
        if(val === '') {
            this.setState({ images: [] });
        } else {
            axios
              .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchValue}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then((res) => this.setState({ images: res.data.hits }))
              .catch((err) => console.log(err));
        }
    });
  };


  onAmountChange = (e, index, value) => this.setState({ [e.target.name]: e.target.value });

  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          id="outlined-search"
          label="Search Images"
          type="search"
          defaultValue={this.state.searchValue}
          onChange={this.handleChange}
          fullWidth={true}
        />
        <br></br>

        <Select
          name="amount"
          label="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>   
        </Select>
        <br></br>

        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search
