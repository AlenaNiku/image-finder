import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from "@material-ui/core/Dialog";
import FlatButton from 'material-ui/FlatButton';
import { Grid } from '@material-ui/core';

class ImageResults extends Component {
    render() {

        let imageListContent;
        const { images } = this.props;

        if (images) {
          imageListContent = (
            <GridList cols={3}>
              {images.map((img) => (
                <GridListTile
                  title={img.tags}
                  key={img.id}
                  subtitle={
                    <span>
                      by <strong>{img.user}</strong>
                    </span>
                  }
                  actionIcon={
                    <IconButton
                      onClick={() => this.handleOpen(img.largeImageURL)}
                    >
                      <ZoomIn color="white" />
                    </IconButton>
                  }
                >
                  <img src={img.largeImageURL} alt="" />
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
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;

// map through the images, because they are coming in as a prop and it's an array