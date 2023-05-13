import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button/Button";
import styles from './Pagination.module.css'

export default function Pagination({ 
    postsPerPage,
    totalPosts,
    activePage,
    paginate,
} : {
    postsPerPage: number
    totalPosts: number
    activePage: number
    paginate: Function
}) {
    
  const [pageNumbers, setPageNumber] = useState<Array<number>>([])
  
    useEffect(() => {
        setPageNumber([])
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            setPageNumber(oldArray => [...oldArray, i])
        }
    }, [postsPerPage, totalPosts])
  
    return (
      <nav className={styles.pagination}>
        <ul className='pagination'>
          {pageNumbers[0] && pageNumbers.map((number) => (
            <li key={number} className='page-item'>
                <Button 
                    text={`${number}`}
                    clicked={() => paginate(number)} 
                    active={number === activePage ? true : false}
                    activeColor={{backgroundColor: "var(--accent-color)"}}
                />
            </li>
          ))}
        </ul>
      </nav>
    );
  };