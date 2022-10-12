import { Component } from 'react';
import css from './Searchbar.module.css'
import SearchIcon from '../../icon/search-icon.svg'
export class SearchBar extends Component{
    state = {
    searchQuery:'',
    }

    handleInput = (e) => {
        const { value } = e.target
        this.setState({
            searchQuery: value
        })
        
    
    }
    resetInput = () => {
        this.setState({
            searchQuery: ''
        })
    }

    render() {
        const {searchQuery} = this.state
        const {onSubmit}=this.props
        return (
            
             <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(searchQuery)
                    this.resetInput()
                }}>
        <button type="submit" className={css.SearchForm_button}>
            <img src={SearchIcon} alt="Search icon" />
        </button>

        <input
            className={css.SearchForm_input}
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={searchQuery}
                        
        />
    </form>
    </header>
        )
    }
}