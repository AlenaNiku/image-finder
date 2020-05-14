import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { IconButton, DialogActions } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: '',
  };

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map((img) => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt="" />
              <GridListTileBar
                title={img.tags}
                subtitle={
                  <span>
                    by <strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    color="primary"
                    onClick={() => this.handleOpen(img.largeImageURL)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return (
        <div>
            {imageListContent}
             <Dialog
                onClose={this.handleClose}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
             >
                <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
  }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;

// map through the images, because they are coming in as a prop and it's an array

// GridlistTile needs GridListTileBar to display information about the tile and it will have an overlay