import _ from 'lodash'
export const paginate = (currentPage , items)=>{
    const startIndex = (currentPage-1)* 24
    return _(items).slice(startIndex).take(24).value()
}