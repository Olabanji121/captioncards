import React from "react";

const CaptionUnderTagItem = ({ tagsWIthCaption, id }) => {
  return (
    <>
      <ul className=" list-group m-3 ">
        <li className="list-group-item p-3 ">
          <span class="badge badge-secondary">{id}</span>
          <span className="px-3"> {tagsWIthCaption} </span>
        </li>
      </ul>
    </>
  );
};

export default CaptionUnderTagItem;
