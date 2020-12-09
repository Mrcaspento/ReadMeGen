// function to generate markdown for README
function generateMarkdown(userQuestions) {
  return `
  # ${userQuestions.title}
  ![badge](https://img.shields.io/static/v1?label=License&message=${userQuestions.license}&color=success)
========================================================================================================

## **Table of contents**
* [Description](#description)
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

 ## Contributors
 ${userQuestions.collabs}
 ## Contact
 If you have any questions or concerns my contact info is below.
 https://github.com/${userQuestions.gitHubName}/
 ${userQuestions.email}
`;
}

module.exports = generateMarkdown;
