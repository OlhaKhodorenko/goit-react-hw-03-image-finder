import { Component } from 'react';
import { ImageGallery } from './ImageGallery/imageGallery';
import { Searchbar } from './Searchbar/searchbar';
import * as API from './Service/api.js';

export class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    page: 1,
    perPage: 40,
  };
  // getImages = async values => {
  //   const image = await API.getImage(this.state.search);
  //   this.setState(state => ({ images: [...state.images, image] }));
  //   console.log(image);
  // };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ isLoading: true });
      try {
        const addImages = await API.getImage(this.state.search);
        this.setState({ addImages });
      } catch (error) {
        console.log({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  changeSearchQuery = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getImages} />
        {isLoading ? <h2>Serching...</h2> : <ImageGallery items={images} />}
      </div>
    );
  }
}
