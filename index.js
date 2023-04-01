// Code your solution here
// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (element) {
        return element.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function (element) {
        return element.startsWith(name);
    });
}

function matchName(drivers, name) {
    return drivers.filter(function (element) {
        return element.name === name;
    });
}