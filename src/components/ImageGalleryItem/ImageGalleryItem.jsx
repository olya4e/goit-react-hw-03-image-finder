import css from './ImageGalleryItem.module.css'
export const ImageGalleryItem = ({ item, onClick }) => {
    const {webformatURL, tag, largeImageURL} = item;
    return (
        
        <li className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItem_image} src={webformatURL} alt={tag} onClick={()=>onClick(largeImageURL)} />
            </li>
       
    )
}