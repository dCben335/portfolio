import Button from "@/components/ui/Button/Button";
import styles from './Pagination.module.scss'

type PaginationProps = {
  postsPerPage: number,
  totalPosts: number,
  activePage: number,
  paginate: (pageNumber: number) => void
}


const Pagination = ({ postsPerPage, totalPosts, activePage, paginate } : PaginationProps) => {

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = Array(totalPages).fill(0).map((_, i) => i + 1);
  
  if (!pageNumbers.at(1)) return;
  
  return (
    <nav className={styles.pagination}>
      <ul>       
        {(pageNumbers ?? []).map((number) => (
          <li key={number}>
            <Button 
              onClick={() => paginate(number)} 
              active={number === activePage}
            >
              {`${number}`}
            </Button>
          </li>
        ))}
      </ul>
    </nav>  
  );
};

Pagination.displayName = 'Project_Pagination';

export default Pagination;