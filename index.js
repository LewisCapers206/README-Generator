const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <h1>Welcome to project ${answers.title}</h1>
</body>
</html>`

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    }

])
.then((answers) => {
    const htmlpagecontent = generateHTML(answers);

    fs.writeFile('index.html', htmlpagecontent, (err) =>
        err ? console.log(err) : console.log('Yay you created index.html')
    );
});


