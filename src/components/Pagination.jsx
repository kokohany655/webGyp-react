import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Pagination = ({exercises, setcurrentPage, currentPage}) => {
    const pagesCount = Math.ceil(exercises/24)
    const pages = _.range(1,pagesCount+1)
  return (
    <HStack w='100%' justifyContent={'center'} m='20px 0'>
    {pagesCount>2&&<nav >
  <ul className="pagination" >
    <li className={currentPage===1?"page-item disabled": "page-item"}>
      <Link className="page-link" aria-label="Previous" onClick={()=>{setcurrentPage(currentPage-1)}}>
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li>
    {pages.map(page=>(
        <li key={page} className={page===currentPage ?"page-item active" : "page-item"}>
            <Link className="page-link" onClick={()=>{setcurrentPage(page)}}>{page}</Link>
        </li>
    ))}
    
    <li class={currentPage===pagesCount?"page-item disabled":"page-item"}>
      <Link class="page-link"  aria-label="Next" onClick={()=>{setcurrentPage(currentPage+1)}}>
        <span aria-hidden="true">&raquo;</span>
      </Link>
    </li>
  </ul>
</nav>}
</HStack>
  )
}

export default Pagination