import { Grid } from 'react-loader-spinner';
import css from './Loder.module.css'
export const Loader = () => {
    return (
        
           <Grid
            height="150"
            width="150"
            color="#3f51b5"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass={css.spinner}
            visible={true}
            />
        
    )
}
