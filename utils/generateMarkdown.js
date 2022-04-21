// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ["Apache 2.0", "GNU GPL License", "MIT"]
function renderLicenseBadge(license) {
  if (license === licenseArr[0]){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === licenseArr[1]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else if (license === licenseArr[2]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseArr[1]) {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === licenseArr [2]) {
    return `(https://opensource.org/licenses/MIT)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Read more about ${licenseArr[0]} here: `
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here: `
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here: `
  } else {
    return ""
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contribute}
  [Contributor Covenant](https://www.contributor-covenant.org/) 

  ## Tests
  ${data.test}

  ## Questions?
  ### You can reach me here: 
  [${data.username}](https://github.com/${data.username})
  ${data.email}
`;
}

module.exports = generateMarkdown;
