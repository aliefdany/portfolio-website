import axios from "axios";
import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class ProjectCarousel extends Component {
  state = { loading: true, urls: [] };

  getData() {
    axios
      .get(`/api/project/${this.props.id}`, {})
      .then((res) => {
        const data = res.data[0];
        const imageArr = data.imageURL;
        console.log(imageArr);
        this.setState({ urls: imageArr });
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }

    const images = this.state.urls.map((url) => {
      return {
        original: url,
        thumbnail: url,
      };
    });
    console.log(images);

    return <ImageGallery items={images} autoplay={true} />;
  }
}

export default ProjectCarousel;
