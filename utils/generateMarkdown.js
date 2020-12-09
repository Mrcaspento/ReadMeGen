// function to generate markdown for README
function generateMarkdown(userQuestions) {
  return `
  # ${userQuestions.title}
  ![badge](https://img.shields.io/static/v1?label=License&message=${userQuestions.license}&color=success)
  
`;
}

module.exports = generateMarkdown;
