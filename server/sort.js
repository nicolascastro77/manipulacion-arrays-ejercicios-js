const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
]

const sort= words.sort((a,b) => a.localeCompare(b));
console.log(sort);

const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const numberoder= numbers.sort ((a,b) => a-b);
console.log(numberoder);

const ordersOrder= orders.sort ((a,b) => a.total-b.total);
console.log(ordersOrder);