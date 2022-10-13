import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery'
import { LoadMoreBtn } from './Button/Button'
import {Loader} from './Loader/Loader'
import {getImageFromApi} from '../api/api'
import  Modal  from "./Modal/Modal";

class App extends Component {
  state = {
    items:[],
    page: 1,
    searchQuery: '',
    isLoading: false,
    urlImage: ''
  }
  componentDidUpdate(_, prevState) {
    const { page, searchQuery} = this.state
    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.addImage(page, searchQuery)
    }
    
  }
  addImage = async (page, searchQuery) => {
    try {
      this.setState({
        isLoading: true
      })
      const images = await getImageFromApi(page, searchQuery)
      
    this.setState(prevState=>({
      items: [...prevState.items, ...images],
      isLoading: false
    }))
      
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        isLoading: false
      })
    }
    
  }

  handleSearchbarSumbit = (searchQuery) => {
    if (searchQuery.trim() === '') {
      alert('Please, enter your request')
      return
    }
    this.setState({
      searchQuery: searchQuery,
      page: 1,
      items: []
    })
  
  }
  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }
  onOpenModal = (url) => {
    this.setState({
      urlImage: url
    })
    
  }
  onCloseModal = () => {
    this.setState({
      urlImage:''
    })
  }
 

  render() {
    const { items, isLoading, urlImage } = this.state
    

    return (
      <div>
        <SearchBar onSubmit={this.handleSearchbarSumbit} />
        <ImageGallery items={items} onClick={this.onOpenModal} />
        {isLoading && <Loader />}
        
        {items.length > 0 && (<LoadMoreBtn onClick={this.onLoadMoreButton} />)}
        
        {urlImage && <Modal url={urlImage} onClose={ this.onCloseModal} />}
      </div>
    )
  }

}
export default App