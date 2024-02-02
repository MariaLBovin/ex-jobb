import { NavLink, useMatches } from 'react-router-dom';



const Breadcrumbs = () => {
    const matches = useMatches();

  return (
    <>
      <nav aria-label="breadcrumbs" className='breadcrumbs'>
      <ol className='breadcrumbs-list'>
          {matches.map((match, index) => {
            const isLastMatch = index === matches.length - 1;
            const categoryName = match.params?.text;

            return (
              <li key={index + 1} className='breadcrumbs-list-item'>
                {index > 0 && <span className="breadcrumbs-list-itemSeparator">/</span>}
                {isLastMatch ? (
                  <span className='breadcrumbs-list-itemText'>{categoryName}</span>
                ) : (
                  <NavLink to={match.pathname} className='breadcrumbs-list-itemLink'>
                    <span className='breadcrumbs-list-itemText'>
                    {index === 0 ? 'Hem' : categoryName ? `${categoryName} Kategori` : ''}
                    </span>
                    
                  </NavLink>
                )}
              </li>
            );
          })}
        </ol>
    </nav>
    </>
  );
};

export default Breadcrumbs;
