import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

const selectCourse = () => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

const boundSelectCourse = (index) => dispatch(selectCourse(index));

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export { selectCourse, unSelectCourse, boundSelectCourse, boundUnSelectCourse };
