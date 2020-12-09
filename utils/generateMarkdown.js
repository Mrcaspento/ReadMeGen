// function to generate markdown for README
function generateMarkdown(userQuestions) {
  return `
  # ${userQuestions.title}
  ![badge](https://img.shields.io/static/v1?label=License&message=${userQuestions.license}&color=success)
========================================================================================================
## Description
${userQuestions.description} 
You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

## **Table of contents**
* [Description](#description)
* [Installation](#instructions)
* [Usage](#usage)
* [License](#test)
* [Contributors](#Collabartors)
* [Contact](#email)

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
