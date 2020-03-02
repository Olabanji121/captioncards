import React from 'react';
import ReactDOM from 'react-dom'
import TagItem from '../../component/tags/TagsItem'
import Tag from '../../component/tags/Tag'
import { configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({adapter: new Adapter()});

describe('Tags, renders without Error', () => {

    it('should render AddTags', ()=>{

        const component = shallow(<Tag/>);

        const wrapper = component.find(TagItem);

        expect(wrapper.length).toBe(1);     
 
        // let tree = component.toJSON();  
        // expect(tree).toMatchSnapshot();
    })
   
});
