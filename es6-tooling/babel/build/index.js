'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = 1;
var y = 10;
var sum = function sum(a, b) {
    return a + b;
};

var Person = function () {
    function Person(id, name) {
        _classCallCheck(this, Person);

        this.id = id;
        this.name = name;
    }

    _createClass(Person, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('Hello' + this.name);
        }
    }]);

    return Person;
}();
