module.exports = {
    "env": {
        "commonjs": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "html",
        "vue"
    ],
    "rules": {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-console": "off",
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        //选择加分号结尾
        "semi": [
            2,
            "always"
        ],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, {
            "max": 100
        }],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
        //如果设置为always 那么就应该在在写数组是前后都留空格
        "array-bracket-spacing": [
            2,
            "never"
        ],
        //如果代码块是单行的时候，代码块内部前后需要留一个空格
        "block-spacing": [
            2,
            "always"
        ],
        //大括号语法采用『1tbs』,允许单行样式
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        //构造函数首字母大写
        "new-cap": [
            2,
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],
        //const申明的变量禁止修改
        "no-const-assign": 2,
        "no-undef": "off",
        //使用单引号
        "quotes": [
            1,
            "single",
            "avoid-escape"
        ],
        //立即执行函数需要用圆括号包围
        "wrap-iife": [
            2,
            "any"
        ],
    }
};