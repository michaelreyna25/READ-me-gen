// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "MIT") {
      return "This project is licensed under the MIT license.";
    } else if (license === "Apache") {
      return "This project is licensed under the Apache license.";
    } else if (license === "GPL") {
      return "This project is licensed under the GPL license.";
   } else {
    return "";
   }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${answers.title}

  ## Description 
  
  ${answers.description}
  
  ## Table of Contents 
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
  ${answers.install}
  
  ## Usage 
  
  ${answers.usage}
  
  ## Credits
  
  ${answers.contributing}

  ${answers.github}

  ${answers.email}

  ## License
  
  ${renderLicenseBadge(answers.license)}

  ${renderLicenseLink(answers.license)}

  ${renderLicenseSection(answers.license)}

  ## Tests
  
  ${answers.tests}
    
  ---
  
  © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
`;
  }

  module.exports = generateMarkdown;
