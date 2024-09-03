import Link from 'next/link';

const Pagination = ({ currentPage, totalPages }:any) => {
  const prevPage = parseInt(currentPage) - 1;
  const nextPage = parseInt(currentPage) + 1;

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex">
        {prevPage > 0 && (
          <li className="mr-2">
            <Link href={`?page=${prevPage}`}>
              <a className="p-2 bg-gray-200 rounded">Previous</a>
            </Link>
          </li>
        )}
        <li className="mr-2">
          <span className="p-2">{`Page ${currentPage} of ${totalPages}`}</span>
        </li>
        {nextPage <= totalPages && (
          <li>
            <Link href={`?page=${nextPage}`}>
              <a className="p-2 bg-gray-200 rounded">Next</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
