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

{
  /* <ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul> */
}
