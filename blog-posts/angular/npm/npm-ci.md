The new npm ci command installs from your lock-file ONLY. If your package.json and your lock-file are out of sync then it will report an error.
It works by throwing away your node_modules and recreating it from scratch. Beyond guaranteeing you that you’ll only get what is in your lock-file it’s also much faster (2x-10x!) than npm install.

Running yarn install takes ~90 seconds on the same machine which is 20 seconds compared to running npm ci .

Running install in fact IS the way to generate and update package-lock.json . This implies that there is a bit more going on than just grabbing specified versions.

On the other hand, running npm ci just deletes node_modules folder and installs versions exactly as specified in package-lock.json 

In short, the main differences between using npm install and npm ci are:

The project must have an existing package-lock.json or npm-shrinkwrap.json.
If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.
npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.
If a node_modules is already present, it will be automatically removed before npm ci begins its install.
It will never write to package.json or any of the package-locks: installs are essentially frozen.

Ref: https://docs.npmjs.com/cli/ci.html