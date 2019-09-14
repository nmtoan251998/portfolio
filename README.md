# My portfolio Website

Feel free to use and modify the source code to fit your requirements
## Installation
```
$ git clone https://github.com/nmtoan251998/portfolio.git

$ cd portfolio

$ npm install
```

### Installation Error
If you see error when installing npm packages as the below message (problems with npm packages)
``` javascript
added 4 packages from 8 contributors and audited 15934 packages in 19.166s
found 2 vulnerabilities (1 low, 1 high)
run `npm audit fix` to fix them, or `npm audit` for details
```

Just run the below command
```
$ npm audit fix
```

## Development
Development
```
$ npm start
```
## Production
Build production source code
```
$ npm run build
```

**HOT FIX**

There will be a problem building production because of files path. After running `npm run build`, you have to go to the .html file in dist/ to rename the path to exact path (sorry forks who use my source code as a serverless web app, I configured the production for server purpose)

```
$ npm run deploy
```

