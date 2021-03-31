import React, { useState } from "react";
import Pagination from "react-js-pagination";

const PageList = () => {
  // Data to be rendered using pagination.
   const todos = [
       'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
       '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    ];
   const todosPerPage = 10;
   const [ activePage, setCurrentPage ] = useState( 1 );

   // Logic for displaying current todos
   const indexOfLastTodo  = activePage * todosPerPage;
   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
   const currentTodos     = todos.slice( indexOfFirstTodo, indexOfLastTodo );

   const renderTodos = currentTodos.map( ( todo, index ) => {
      return <li key={ index }>{ todo }</li>;
   } );

   const handlePageChange = ( pageNumber ) => {
      console.log( `active page is ${ pageNumber }` );
      setCurrentPage( pageNumber )
   };

   return (
      <div className="container">
         <div className="result">
            { renderTodos }
         </div>
         <div className="pagination">
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 10 }
               totalItemsCount={ todos.length }
               pageRangeDisplayed={ 10 }
               onChange={ handlePageChange }
            />
         </div>
      </div>
   )

}

export default PageList;