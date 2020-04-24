import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";

//Let's assure the label on the save button is properly set whe we set the save prop to true.

it('sets submit button label "Saving..." when saving is true', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      //jest.fn() creates an empty mock function
      onChange={jest.fn()}
      saving
      //with the boolean props the existence of the prop infers true, so I don't have to explicitly type =true
    />
  );
  expect(tree).toMatchSnapshot();
  //assertions are how you declare expected behavior in your test
});

it('sets submit button label "Save" when saving is false', () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});

//SNAPSHOTS PROTECT FROM MAKING ACCIDENTAL CHANGES TO COMPONENT OUTPUT
