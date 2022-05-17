
const ArrayPrototype = {};
Object.defineProperties(ArrayPrototype, {
    "value": {
        value: [
            []
        ],
        writable: true,
        enumerable: false
    },
    "level": {
        value: 0,
        enumerable: false
    },
    "add": {
        value: function (element) {
            this.value[this.level].push(element);
        },
        writable: false
    },
    "get": {
        value: function () {
            return this.value[this.level];
        },
        writable: false
    },
    "getPrototype": {
        value: function () {
            let i = 0;
            return [...this.value.slice(0, this.level + 1)].flat()
        }
    },
    "getAll": {
        value: function () {
            return [...this.value.flat()];
        },
        writable: false
    },
    "new": {
        value: function () {
            return {
                value: this.value,
                level: this.level,
                add: this.add,
                get: this.get,
                getPrototype: this.getPrototype,
                getAll: this.getAll,
                new: function () {
                    this.value.push([])
                    return {
                        value: this.value,
                        level: this.level + 1,
                        add: this.add,
                        get: this.get,
                        getPrototype: this.getPrototype,
                        getAll: this.getAll,
                        new: this.new
                    }
                },
            }
        }
    }
});
module.exports = { ArrayPrototype }