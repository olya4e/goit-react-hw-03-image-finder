import { Audio } from 'react-loader-spinner';
import css from './Loder.module.css'
export const Loader = () => {
    return (
        
            <Audio
            height="150"
            width="150"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperClass={css.skeleton}
            
            />
        
    )
}
