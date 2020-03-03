# Caption Cards Application 

This is a simple captions card frontend application,  that let you view, create Captions, create Tags and add Captions to Tags.

## **API Documentation**
Below is the link to the API Documentation used for this frontend application  

[Captions Cards API Documentation](https://documenter.getpostman.com/view/7988284/SzKTvysQ?version=latest)

Six server endpoint was consumed for this Apllication;

- [Get all Captions](https://capcards-api.herokuapp.com/v1.0/api/caption/)
- [Add Captions](https://capcards-api.herokuapp.com/v1.0/api/caption/)
- [Get all Tags](https://capcards-api.herokuapp.com/v1.0/api/tag/)
- [Add Tags](https://capcards-api.herokuapp.com/v1.0/api/tag/)
- [Get Captions under Tag](https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=2)
- [Create caption with tags](https://capcards-api.herokuapp.com/v1.0/api/caption/multi)



## Technology Used 
- Client side Framework: ***React (React Hooks)***
- State Management : ***Redux***
- Testing: ***Jest and Enzyme***
- Hosting: ***Netlify***
- API Calls: ***Axios***
- CSS Styling: ***Styled Components and Bootstrap***
- Animations: ***React Reveal***




## User Guide

On the Navigation Bar there are two links **Captions** and **Tags**;



## 
***Captions*** link show the list of all captions (**Caption List**) which shows on the landing page once the app loads, the list of all caption is gotten from the server endpoint [Get all Captions](https://capcards-api.herokuapp.com/v1.0/api/caption/).

<div align="center"><img width="600" alt="CaptionList" src="https://res.cloudinary.com/obanj/image/upload/v1583226889/DevHangout/zicl/captionlist_sxd1jf.jpg"></div>





Also on the landing page you can **Add Caption**  with a click of Add Caption button a modal will pop up for you to input your Caption and click on Add Caption button on the modal, the Add Caption button  on the modal make use of [Add Captions](https://capcards-api.herokuapp.com/v1.0/api/caption/) API endpoint

***Note:*** **you can only add one Caption at a time and also the character most be more than 3, and less than 100**

<div align="center"><img width="600" alt="addCaption" src="https://res.cloudinary.com/obanj/image/upload/v1583226994/DevHangout/zicl/add_Caption_ewoerl.jpg">
</div>






## 
***Tags*** link shows another page with the list of Tags (**Tag List**) which is a response from this server endpoint [Get all Tags](https://capcards-api.herokuapp.com/v1.0/api/tag/)

<div align="center"><img width="600" alt="tagList" src="https://res.cloudinary.com/obanj/image/upload/v1583226908/DevHangout/zicl/Tag_list_vddvwa.jpg"></div>



Tag List page, you can ***Add Tag*** by clicking on the Add Tag button on the page which pops up a modal,  input your tag and click the Add Tag button on the modal, the Add Tag button on the modal uses the [Add Tags](https://capcards-api.herokuapp.com/v1.0/api/tag/) API endpoint

<div align="center"><img width="600" alt="addtag" src="https://res.cloudinary.com/obanj/image/upload/v1583226867/DevHangout/zicl/addtag_ixi3jm.jpg"></div>



On each Tag on the Tag list page there is a **Show Caption** button, a click of the button will take you to a page showing the captions on that Tag(the button uses this  endpoint [Get Captions under Tag](https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=2)).


<div align="center"><img width="600" alt="addtag" src="https://res.cloudinary.com/obanj/image/upload/v1583226882/DevHangout/zicl/captionundertag_lkk4yy.jpg"></div>



On this page you can Add Caption to the  selected Tag with the **Add caption to Tag** button(the button uses this endpoint [Create caption with tags](https://capcards-api.herokuapp.com/v1.0/api/caption/multi)  ) it show a modal as seen below, and also, there is a **Back to Tags** button (under the list of the captions)  to take you back to the Tag list page 

<div align="center"><img width="600" alt="addcaptiontotag" src="https://res.cloudinary.com/obanj/image/upload/v1583226862/DevHangout/zicl/addcaptiontotag_vpvjmo.jpg"></div>
