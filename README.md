# My portfolio Website
Feel free to use and modify the source code to fit your needs

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
## Build
Build production source code
```
$ npm run build
```

**NOTES**

- The built source code from /src will be minifized and generated into /dist.
- Because of human readable reason, I split /dist and /build into 2 seperated folders.
- All the source code in folder build will be deployed to github.io host*

## Deploy to github.io
```
npm run deploy
```
Please make sure to **put what you want to be deployed to github.io in /build folder**