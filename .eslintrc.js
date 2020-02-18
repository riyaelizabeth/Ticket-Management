module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "globals": {
        "__base": false
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
    }
};