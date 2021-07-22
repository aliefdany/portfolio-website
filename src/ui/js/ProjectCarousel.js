import { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class ProjectCarousel extends Component {
  state = {};

  render() {
    const images = this.props.imageURL.map((url) => {
      return {
        original: url,
        thumbnail: url,
      };
    });

    return (
      <ImageGallery
        items={images}
        autoPlay={true}
        showPlayButton={false}
        lazyLoad={true}
      />
    );
  }
}

export default ProjectCarousel;
