module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "no-trailing-spaces": 2,
        "space-in-parens": [2, "never"],
        "object-curly-spacing": [2, "never"],
        "eol-last": 2,
        "no-spaced-func": 2,
        "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "never"],
    }
};