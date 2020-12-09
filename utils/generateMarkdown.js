// function to generate markdown for README
function generateMarkdown(userQuestions) {
  return `
  # ${userQuestions.title}
  ![badge](https://img.shields.io/static/v1?label=License&message=${userQuestions.license}&color=success)
========================================================================================================

## **Table of contents**
* [Description]()
* [Installation]()
* [Usage]()
* [License]()
* [Contributors]()
* [Contact]()

## Installation
${userQuestions.instructions}

## Usage
${userQuestions.usage} 
--------------------------------------------------------------------------------------------------------
 We can test for:
 ${userQuestions.test}
`;
}

module.exports = generateMarkdown;
