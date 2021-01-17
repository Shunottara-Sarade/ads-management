import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';



const setUp = (props = {}) => {
  const component = shallow(<Login {...props} />);
  return component;
};

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}





describe('have props', () => {

  let wrapper;
  beforeEach(() => {
    const props = {

      email: 'dakshatanaik09@gmail.com',

      password: '123@daK',

      //  errors: {'please enter valid email Id'}   
    };
    wrapper = setUp(props);
  });

  it('should render Login component without errors', () => {
    const component = findByTestAttr(wrapper, 'Login');
    expect(component.length).toBe(1);
  });

  it('should render input tag', () => {
    const Input = findByTestAttr(wrapper, 'email');
    expect(Input.length).toBe(1);
  })

});




describe('<Login/>', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      handleFormSubmit: () => {
      },
    };
    wrapper = shallow(<Login {...props} />);
  });

  it('should have a `<Form>` element', () => {
    expect(
      wrapper.find('Form').length
    ).toBe(1);
  });

  // it('`<input>` element should have a placeholder attribute with value `Name`', () => {
  //     expect(
  //       wrapper.find('FormGroup').childAt(0).props().placeholder
  //     ).toBe('&#xf0e0; Email Id');
  //   });

  //   it('should display an error when no value is input', () => {
  //     const handleFormSubmit = spy();
  //     wrapper = mount(<LoginCust handleFormSubmit={handleFormSubmit} />);
  //     wrapper.find('Form').simulate('submit');
  //     expect(
  //       wrapper.state().fieldErrors.name
  //     ).toBe('Please enter valid email-ID.');
  //   });

});
// describe('should not have props', () => {

//     let wrapper;

//     beforeEach(() => {
//         wrapper = setUp();
//     });

//     it('should not render', () => {
//         const component = findByTestAttr(wrapper, 'LoginCust');
//         console.debug(component);
//         expect(component.length).toBe(0);
//     });
// });
