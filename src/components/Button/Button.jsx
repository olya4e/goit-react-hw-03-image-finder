import css from './Button.module.css'
export const LoadMoreBtn = ({ onClick }) => {
    return (
       <div className={css.loadMore_wrapper}>
            <button onClick={onClick} type='button' className={css.Button}>Load more</button>
        </div>
    )
}
