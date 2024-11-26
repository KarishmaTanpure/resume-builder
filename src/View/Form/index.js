import React from 'react';
import { makeStyles } from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { Box, Button, Typography } from '@mui/material';
import ProfileForm from "./profileForm";
import EducationForm from "./education";
import Skills from "./skills";
import Social from "./social";
import Project from "./projects";
import Resume from "../Resume/index";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Profile Section",
    "Education Section",
    "Skills Sector",
    "Project",
    "Social",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProfileForm />;
    case 1:
      return <EducationForm />;
    case 2:
      return <Skills />;
      case 3:
        return <Project />;
      case 4:
        return <Social />;
      default:
        return "Unknown step";
    }
  }
const ResumeForm = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const ValidateProfileDetails = () => {
    if (!props.profileData) {
      return false;
    }
    if (
      !props.profileData.Data.fname ||
      !props.profileData.Data.lname ||
      !props.profileData.Data.phone ||
      !props.profileData.Data.address ||
      !props.profileData.Data.url
    ) {
      alert("Please fill all the data");
      return false;
    }

    if (
      props.profileData.Data.fname.length < 1 ||
      props.profileData.Data.lname.length < 1 ||
      props.profileData.Data.address.length < 1 ||
      props.profileData.Data.url.length < 1
    ) {
      alert("Please fill all the data.");
      return false;
    }

    if (
      props.profileData.Data.phone.length !== 10 &&
      props.profileData.Data.phone.length !== 12
    ) {
      alert("Enter a valid phone number.");
      return false;
    }
    return true;
  };

  const validateEducationDetails = () => {
    if (!props.educationFormData) return false;
    const Data = props.educationFormData.Data;
    for (let i = 0; i < Data.length; i++) {
      const instance = Data[i];
      if (
        !instance.courseName ||
        !instance.completionYear ||
        !instance.college ||
        !instance.percentage
      ) {
        alert("Please fill all the data");
        return false;
      }

      if (
        instance.courseName.length < 1 ||
        instance.completionYear.length !== 4 ||
        instance.college.length < 1 ||
        instance.percentage.length < 1
      ) {
        alert("Incomplete or invalid data");
        return false;
      }
    }

    return true;
  };

  const validateProjectDetails = () => {
    if (!props.projectFormData) return false;
    const Data = props.projectFormData.Data;
    for (let i = 0; i < Data.length; i++) {
      const instance = Data[i];
      if (!instance.projectName) {
        alert("Please enter the name of project");
        return false;
      }

      if (instance.projectName.length < 1) {
        alert("Please enter the name of project");
        return false;
      }
    }
    return true;
  };

  const validateSkills = () => {
    if (props.SkillsFormData.Data.length < 1) {
      alert("Please enter your skill");
      return false;
    }
    for (let i = 0; i < props.SkillsFormData.Data.length; i++) {
      if (
        !props.SkillsFormData.Data[i] ||
        (props.SkillsFormData.Data[i] &&
          props.SkillsFormData.Data[i].length < 1)
      ) {
        alert("Please fill all skills");
        return false;
      }
    }
    return true;
  };

  const validateSocialLinks = () => {
    if (props.SocialFormData.Data.length < 1) {
      alert("Please enter your social URL");
      return false;
    }
    for (let i = 0; i < props.SocialFormData.Data.length; i++) {
      if (
        !props.SocialFormData.Data[i] ||
        (props.SocialFormData.Data[i] &&
          props.SocialFormData.Data[i].length < 1)
      ) {
        alert("Please fill all URLs");
        return false;
      }
    }
    return true;
  };

  const validateWorkExperience = () => {
    if (!props.WorkExperienceData) return false;
    const Data = props.WorkExperienceData.Data;
    for (let i = 0; i < Data.length; i++) {
      const instance = Data[i];
      if (
        !instance.companyName ||
        !instance.role ||
        !instance.duration ||
        !instance.description
      ) {
        alert("Please fill all the work experience details");
        return false;
      }
      if (
        instance.companyName.length < 1 ||
        instance.role.length < 1 ||
        instance.duration.length < 1 ||
        instance.description.length < 1
      ) {
        alert("Incomplete or invalid data");
        return false;
      }
    }
    return true;
  };
  

  const handleComplete = () => {
    let flag = true;
    const action = getSteps()[activeStep];

    if (action === "Profile Section") {
      flag = ValidateProfileDetails();
    } else if (action === "Education Section") {
      flag = validateEducationDetails();
    } else if (action === "Mini Project") {
      flag = validateProjectDetails();
    } else if (action === "Skills Sector") {
      flag = validateSkills();
    } else if (action === "Social") {
      flag = validateSocialLinks();
    }
    else if (action === "Work Experience") {
      flag = validateWorkExperience();
    }
    

    if (flag) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  const handleEdit = () => {
    setCompleted({});
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              color="secondary"
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - your resume is ready!!
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleEdit}>Edit</Button>
            <Resume />
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                  className={classes.button}
                  sx={{ mr: 2 }}
                >
                  Next
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleComplete}
                >
                  {completedSteps() === totalSteps() - 1
                    ? "Finish"
                    : "Save and Continue"}
                </Button>
              </div>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  educationFormData: state.Education,
  profileData: state.Profile,
  projectFormData: state.Project,
  SkillsFormData: state.Skills,
  SocialFormData: state.Social,
});

export default connect(mapStateToProps, {})(ResumeForm);
