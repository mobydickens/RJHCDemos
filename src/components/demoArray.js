import React from 'react';
// import Sum from './Sum.jsx';
import EvenOdd from './EvenOdd.jsx';
import Palindrome from './Palindrome.jsx';
// import Subtraction from './Difference.jsx';
// import Multiply from './Multiply.jsx';
// import Division from './Division.jsx';
import Math from './Math.jsx';
import MathDemos from './MathDemos.jsx';

export default [
  {
      component: <MathDemos />,
      name: "Sum",
      componentName: "mathDemos"
  },
  {
      component: <MathDemos />,
      name: "Difference",
      componentName: "mathDemos"
  },
  {
    component: <MathDemos />,
    name: "Multiply",
    componentName: "mathDemos"
  },
  {
    component: <MathDemos />,
    name: "Division",
    componentName: "mathDemos"
  }, 
  {
      component: <EvenOdd />,
      name: "Even and odd",
      componentName: "EvenOdd"
  },
  {
      component: <Palindrome />,
      name: "Palindrome",
      componentName: "Palindrome"
  },
  {
    component: <Math />,
    name: "Math",
    componentName: "Math"
  }
]