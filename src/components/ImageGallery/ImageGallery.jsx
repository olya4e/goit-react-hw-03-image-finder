import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'

export const ImageGallery = ({ items, onClick }) => {
    return (
        <ul className={css.ImageGallery}>
            {items.map((item)=>
            {
                
                return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />
            }
                )}
        </ul>
    )
}