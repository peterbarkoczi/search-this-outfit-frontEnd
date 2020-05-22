const {defaults} = require('jest-config');
module.exports = {
    verbose: true,
    rootDir: "./",
    transform: {
        "^.+\\.js?$": "babel-jest",
    },
    "modulePaths": [
        "src",
        "test"
    ],
    "testResultsProcessor": "jest-teamcity-reporter",
    "testEnvironment": "jest-environment-jsdom-sixteen",
    "moduleNameMapper": {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    }
}