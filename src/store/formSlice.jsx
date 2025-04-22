import { createSlice } from "@reduxjs/toolkit";
import { arrayMove } from '@dnd-kit/sortable';

const initialState = {
  currentStep: 1,
  basicInfo: {
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
  },
  educations: [],
  skills: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setBasicInfo: (state, action) => {
      state.basicInfo = action.payload;
    },
    addEducation: (state, action) => {
      state.educations.push(action.payload);
    },
    deleteEducation: (state, action) => {
        state.educations.splice(action.payload, 1);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
        state.skills.splice(action.payload, 1);
    },
    reorderSkills: (state, action) => {
        state.skills = arrayMove(state.skills, action.payload.oldIndex, action.payload.newIndex);
      },
  },
});

export const { setCurrentStep, setBasicInfo, addEducation,deleteEducation, addSkill,deleteSkill,reorderSkills } = formSlice.actions;

export default formSlice.reducer;
