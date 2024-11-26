import { EDUCATION, MODIFY_COUNT, 
MODIFY_PROJECTS_COUNT, MODIFY_SKILLS_COUNT, MODIFY_SOCIAL_COUNT, 
PROFILE, PROJECTS, SKILLS, SOCIALS } from "../Constants/constant";

export const SaveEducationData = (data) => transfer =>{

    transfer({
     type: EDUCATION,
     payload : data
    })
}

export const ModifyEducationCount = (count) => transfer =>{
    transfer({
     type: MODIFY_COUNT,
     payload: count
    })
   }

   export const ModifySkillsCount = (count) => transfer =>{
    transfer({
     type: MODIFY_SKILLS_COUNT,
     payload: count
    })
   }
   export const ModifySocialsCount = (count) => transfer =>{
    transfer({
     type: MODIFY_SOCIAL_COUNT,
     payload: count
    })
   }
   export const ModifyProjectsCount = (count) => transfer =>{
    transfer({
     type: MODIFY_PROJECTS_COUNT,
     payload: count
    })
   }
   export const SaveProfileData = (data) => transfer =>{

    transfer({
     type: PROFILE,
     payload : data
    })
}

export const SaveSocialData = (data) => transfer =>{

    transfer({
     type: SOCIALS,
     payload : data
    })
}

export const SaveSkillsData = (data) => transfer =>{
    transfer({
     type: SKILLS,
     payload : data
    })
}

export const SaveProjectData = (data) => transfer =>{
    transfer({
     type: PROJECTS,
     payload : data
    })
}

export const updateWorkExperience = (data) => ({
    type: "SET_WORK_EXPERIENCE",
    payload: data,
  });
  