Tips to follow up

npm i will create package-lock.json file for the 1st time. 
Then running npm i afterwards will update package-lock.json file with newer version of dependecies and other transitive dependencies as well.

Try using npm ci, in the CICD pipelines. This way you can ensure that your pipeline uses exactly the same dependencies you last used locally and can confirm that they worked for you.


In a meticulous way, 

npm install generates the package-lock.json for you. The file contains the exact version numbers of all dependencies that you installed as well as the version number of transitive dependencies, all bassed on what you defined in package.json. Note however that in your package.json you can define your version starting with ^ or ~, suggesting that you want to install the latest patch or minor version of a certain dependency. As a result, every time you run npm install your package-lock.json might end up containing slightly newer versions of your packages if available.

npm ci on the other hand doesn't not generate package-lock.json file. Quite the opposite. It requires your package-lock.json to already be there and it installs exactly the versions that are listed there. This is the command that you want to run on your CI/CD pipeline. This way you can ensure that your pipeline uses exactly the same dependencies you last used locally and can confirm that they worked for you.