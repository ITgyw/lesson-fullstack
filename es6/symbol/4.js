const spread = [12, 5, 8, 130, 44];
const g10 = spread.filter((item) => item > 10);
console.log(g10);

const users = [
    {
        'user': 'A',
        'age': 36,
        'active': true
    },
    {
        'user': 'B',
        'age': 40,
        'active': false
    },
    {
        'user': 'C',
        'age': 24,
        'active': false
    },
    {
        'user': 'D',
        'age': 80,
        'active': false
    },
    {
        'user': 'E',
        'age': 80,
        'active': false
    }
]

const gusers = users.filter((user) => user.age == 24 || user.age == 40)
console.log(gusers);