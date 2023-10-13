/* // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {} */

const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents
   
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [Contact](#contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Badges
    
  ${data.badges}
  
  ## Features
  
  ${data.features}

  ## Feedback / Contact

  If you have any questions or feedback can reach me at Github, email or LinkedIn down below

  * Github : [${data.github}](https://www.github.com/${data.github})
  * E-mail : ${data.email}
  * LinkedIn : [${data.linkedin}](https://www.linkedin.com/in/${data.linkedin})

  
`;
}

module.exports = generateMarkdown;
