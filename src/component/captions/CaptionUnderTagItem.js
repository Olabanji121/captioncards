import React from 'react'

const CaptionUnderTagItem = ({tagsWIthCaption, id}) => {
    return (
        <>
            <ul
              className="text-dark text-slanted text-center img-card-top p-3 m-3 list-group"
              style={{ height: "5rem" }}
            >

              <li className="list-group-item d-flex  align-items-center">
              <span class="badge badge-warning">{id}</span><span className="px-3"> {tagsWIthCaption} </span> 
              </li>
             
            </ul>
        </>
    )
}

export default CaptionUnderTagItem
