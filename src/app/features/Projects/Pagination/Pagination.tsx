import Button from "@/components/ui/Button/Button";
import styles from './Pagination.module.scss'

type PaginationProps = {
  postsPerPage: number,
  totalPosts: number,
  activePage: number,
  paginate: (number: number) => void
}

export default function Pagination({ postsPerPage, totalPosts, activePage, paginate } : PaginationProps) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = Array(totalPages).fill(0).map((_, i) => i + 1);
      
  return (
    <>
      {pageNumbers.at(1) && (
        <nav className={styles.pagination}>
          <ul>
            
            {(pageNumbers ?? []).map((number) => (
              <li key={number}>
                  <Button 
                    clicked={() => paginate(number)} 
                    active={number === activePage}
                  >{`${number}`}</Button>
              </li>
            ))}
          </ul>
        </nav>
        )
      }
    </>  
  );
};