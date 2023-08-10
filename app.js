function square(number) {
    if (typeof number == 'number') {
        return number * number;
    } else {
        return 'parameter that is passed should be a number';
    }
}

function actualPrice(price, sale) {
    return (price * (100 - sale)) / 100;
}

function random() {
    return Math.round(Math.random() * 100);
}

function length(string) {
    if (typeof string == 'string') {
        return string.length;
    }
    return 'itsnot a strinng';
}

function minRate(array) {
    let minimalR = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].rate < minimalR.rate) {
            minimalR = array[i];
        }
    }
    return minimalR.rate;
}
const currencies = [
    {
        code: 'AMD',
        quantity: 1000,
        rateFormated: '6.6742',
        diffFormated: '0.0202',
        rate: 6.6742,
        name: 'სომხური დრამი',
        diff: 0.0202,
        date: '2023-07-21T17:45:10.772Z',
        validFromDate: '2023-07-22T00:00:00.000Z',
    },
    {
        code: 'EUR',
        quantity: 1,
        rateFormated: '2.8673',
        diffFormated: '0.0131',
        rate: 2.8673,
        name: 'ევრო',
        diff: -0.0131,
        date: '2023-07-21T17:45:10.772Z',
        validFromDate: '2023-07-22T00:00:00.000Z',
    },
    {
        code: 'GBP',
        quantity: 1,
        rateFormated: '3.3111',
        diffFormated: '0.0046',
        rate: 3.3111,
        name: 'დიდი ბრიტანეთის გირვანქა სტერლინგი',
        diff: -0.0046,
        date: '2023-07-21T17:45:10.772Z',
        validFromDate: '2023-07-22T00:00:00.000Z',
    },
    {
        code: 'TRY',
        quantity: 1,
        rateFormated: '0.0957',
        diffFormated: '0.0003',
        rate: 0.0957,
        name: 'თურქული ლირა',
        diff: 0.0003,
        date: '2023-07-21T17:45:10.772Z',
        validFromDate: '2023-07-22T00:00:00.000Z',
    },

    {
        code: 'USD',
        quantity: 1,
        rateFormated: '2.5771',
        diffFormated: '0.0078',
        rate: 2.5771,
        name: 'აშშ დოლარი',
        diff: 0.0078,
        date: '2023-07-21T17:45:10.772Z',
        validFromDate: '2023-07-22T00:00:00.000Z',
    },
];