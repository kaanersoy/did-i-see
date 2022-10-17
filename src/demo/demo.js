let experienceGained = 0;
const EXPERIENCE_ELEMENT_QUERY = ".withObserving";
const experienceBar = document.querySelector(".experience-bar");
const currentExperience = document.querySelector(".current-experience");
const allExperienceElements = document.querySelectorAll(EXPERIENCE_ELEMENT_QUERY);

const addExperiences = () => {
  experienceGained++;
  const allCount = allExperienceElements.length;
  const percentage = (100 * experienceGained) / allCount;
  currentExperience.style.transform = `translateY(${100 - percentage}%)`;
};

didISee(
  EXPERIENCE_ELEMENT_QUERY,
  ({ data }) => {
    addExperiences();
  },
  {
    once: true,
  }
);
