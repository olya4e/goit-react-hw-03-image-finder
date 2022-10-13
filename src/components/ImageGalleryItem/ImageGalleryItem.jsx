import { Component } from 'react';
import {Modal} from '../Modal/Modal'
import css from './ImageGalleryItem.module.css'
export class ImageGalleryItem extends Component  {
    state = {
        urlImage:''
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
        const {urlImage} = this.state
        const { webformatURL, tag, largeImageURL } = this.props.item;
     return (
        <>
        <li className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItem_image} src={webformatURL} alt={tag} onClick={()=>this.onOpenModal(largeImageURL)} />
            </li>
            {urlImage && <Modal url={largeImageURL} onClose={ this.onCloseModal} />}
        </>
    
    )
    }
   
}