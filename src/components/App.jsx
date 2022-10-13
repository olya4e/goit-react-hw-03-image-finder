import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery'
import { LoadMoreBtn } from './Button/Button'
import {Loader} from './Loader/Loader'
import {getImageFromApi} from '../api/api'

class App extends Component {
  state = {
    items:[],
    page: 1,
    searchQuery: '',
    isLoading: false,
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
  
  render() {
    const { items, isLoading } = this.state
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchbarSumbit} />
        <ImageGallery items={items} />
        {isLoading && <Loader />}
        {items.length > 0 && (<LoadMoreBtn onClick={this.onLoadMoreButton} />)}
      </div>
    )
  }

}
export default App