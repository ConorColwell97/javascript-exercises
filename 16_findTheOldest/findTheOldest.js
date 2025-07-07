const findTheOldest = function (people) {
    const first = people[0];

    return people.reduce((oldest, person) => {
        const date = new Date();
        const year = date.getFullYear();

        let personAge;
        let oldestAge;

        if (person.yearOfDeath === undefined && oldest.yearOfDeath === undefined) {
            personAge = year - person.yearOfBirth;
            oldestAge = year - oldest.yearOfBirth;
        } else if (person.yearOfDeath === undefined) {
            personAge = year - person.yearOfBirth;
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } else if (oldest.yearOfDeath === undefined) {
            personAge = person.yearOfDeath - person.yearOfBirth;
            oldestAge = year - oldest.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }


        if (personAge > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    }, first);
};

// Do not edit below this line
module.exports = findTheOldest;
