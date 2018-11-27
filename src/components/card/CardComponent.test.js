import React from 'react'
import CardComponent from "./CardComponent"
import Child from '../child/Child'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount, render } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({adapter: new Adapter()})

describe("Card Component Tests", () => {

    test("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it("Verifying there is only one element with card component class", ()=>{
        const wrapper = shallow(<CardComponent/>)
        expect(wrapper.find('.card-component').length).toBe(1)
        expect(wrapper.find('.hey').length).toBe(1)
        expect(wrapper.hasClass('hey')).toBeFalsy()
    } )


    it("Verifying there exists 3 elements with element name 'Child'", ()=>{
        const wrapper = shallow(<CardComponent/>)
        expect(wrapper.find('Child').length).toBe(3)
    } )

    it("Verifying there is only one element with card component class", ()=>{
        const wrapper = shallow(<CardComponent/>)
        expect(wrapper.find('.card-component').children().length).toBe(4)
    } )
})