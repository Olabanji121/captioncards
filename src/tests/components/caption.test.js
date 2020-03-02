import React from 'react';
import ReactDOM from 'react-dom'
import Caption from '../../component/captions/Caption'
import CaptionList from '../../component/captions/CaptionList'
import { configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({adapter: new Adapter()});



// test('simple example case', () => {
//   expect(2+2).toEqual(4);
// })

describe('Home, renders home page', () => {

    it('should render Caption', ()=>{

        const component = shallow(<Caption/>);

        const wrapper = component.find(CaptionList);

        expect(wrapper.length).toBe(1);     
 
        // let tree = component.toJSON(); 
        // expect(tree).toMatchSnapshot();
    })
   
});


// describe('Home, renders home page', () => {

//     it('render correctly text component', () => {  
//         const TextInputComponent = renderer.create(<CaptionList />).toJSON();
//         expect(TextInputComponent).toMatchSnapshot();
//     });
// });

