import React from 'react';
import EvenOdd from './EvenOdd.jsx';
import Palindrome from './Palindrome.jsx';
import Math from './Math.jsx';


export default [
  {
    component: <Math />,
    name: "Sum",
    componentName: "mathDemos"
  },
  {
    component: <Math />,
    name: "Difference",
    componentName: "mathDemos"
  },
  {
    component: <Math />,
    name: "Multiply",
    componentName: "mathDemos"
  },
  {
    component: <Math />,
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