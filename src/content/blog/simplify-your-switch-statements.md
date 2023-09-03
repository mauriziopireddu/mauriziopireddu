---
author: Maurizio Pireddu
pubDatetime: 2020-12-31T15:22:00Z
category: clean-code
title: Simplify your switch statements
postSlug: simplify-your-switch-statements
featured: false
draft: false
tags:
  - clean-code
ogImage: ""
description: The switch statement is a powerful tool for every developer but it's quite verbose. Let's try to use object literals instead.
---

The switch statement is a powerful tool for every developer.
The MDN documentation describes it as follows:

> The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
>
> -MDN

Let's jump into an example.
We need to write a function which converts a month number to the month name.

Using a switch statement, we could write something like this:

```js
function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    // ...
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

const monthName = getMonthName(10);
console.log(monthName); // "October"
```

This is perfectly fine but lots of the code required for this mapping is just boilerplate.
Let's replace the switch statement with an object literal:

```js
function getMonthName(monthNumber) {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    // ...
    10: "October",
    11: "November",
    12: "December",
  };
  return months[monthNumber];
}

const monthName = getMonthName(10);
console.log(monthName); // "October"
```

The outcome is exactly the same but using a object literal makes our code more concise (30% shorter) and it also improves the code readability.
