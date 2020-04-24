import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";
//Two ways to render a React component for testing Enzyme.
//1) shallow -> renders single component(No actual dom created, faster than mount)
//2) mount -> renders component with children(dom is created in memory via JSDOM and child components are rendered)

//SHALLOW
function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

//CourseForm component renders a form and header
it("renders form and header", () => {
  const wrapper = renderCourseForm();
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

//Enzyme find function accepts CSS selectors
// find('#name')
// find('.wrapper')

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find("button").text()).toBe("Save");
});
it('labels save buttons as "Saving..." when saving', () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
