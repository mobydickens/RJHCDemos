import React from 'react';
import Sum from './Sum.jsx';
import EvenOdd from './EvenOdd.jsx';
import Palindrome from './Palindrome.jsx';
import Subtraction from './Difference.jsx';

export default [
    {
        component: <Sum />,
        name: "Sum"
    },
    {
        component: <Subtraction />,
        name: "Difference"
    },
    {
        component: <EvenOdd />,
        name: "Even and Odd"
    },
    {
        component: <Palindrome />,
        name: "Palindrome"
    }
]