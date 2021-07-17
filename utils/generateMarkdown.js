function generateReadme(data) {
    return `# ${data.title}
    
  ## Description
   ${data.description}

   ## License
   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
   <br />
   This application is covered by the ${data.license} license.

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
   ${data.installation}
  
  ## Usage
  ${data.usage} 

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing}

  ## Questions
  
  Find me on GitHub: [${data.profile}](https://github.com/${data.profile})
  
  You can email me here: ${data.email}
 `;
  }
  
  module.exports = generateReadme;