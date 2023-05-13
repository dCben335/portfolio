import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button/Button";

export default function Pagination({ 
    postsPerPage,
    totalPosts,
    paginate,
} : {
    postsPerPage: number
    totalPosts: number
    paginate: Function
}) {
    
  const [pageNumbers, setPageNumber] = useState<Array<number>>([])
  
    useEffect(() => {
        setPageNumber([])
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            setPageNumber(oldArray => [...oldArray, i])
        }
        console.log(totalPosts)
    }, [postsPerPage, totalPosts])
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers[0] && pageNumbers.map((number) => (
            <li key={number} className='page-item'>
                <Button 
                    text={`${number}`}
                    clicked={() => paginate(number)} 
                />
            </li>
          ))}
        </ul>
      </nav>
    );
  };