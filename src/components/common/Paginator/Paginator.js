import React, {useState} from 'react';
import styles from './Paginator.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
            }
            <div className={styles.paginatorList}>
                {pages
                    .filter(el => el >=leftPortionPageNumber && el <= rightPortionPageNumber)
                    .map((el) => {
                    return (
                        <span className={props.currentPage === el && styles.selected}
                            onClick={ () => {props.onPageChanged(el)}}>{el}</span>
                    )
                })
                }
            </div>
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1)}}>next</button>
            }
        </div>
    )
}

export default Paginator;