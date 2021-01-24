---
title: "The bouncer pattern"
date: "2021-01-24"
excerpt: "The bouncer pattern is a very simple technique that can make your code more readable.
It shines when it comes to pieces of code with many if/else statements and you want to get rid of some unwanted code indentation"
---

# The bouncer pattern

The bouncer pattern is a very simple technique that can make your code more readable.
It shines when it comes to pieces of code with many if/else statements and you want to get rid of some unwanted code indentation.

Let's have a look at the following snippet:

```js
function updateEmail() {
  if (isEmailValid) {
    if (isEmailUnique) {
      saveEmail();
      return { error: false, message: "Email updated" };
    } else {
      return { error: true, message: "Email already in use" };
    }
  } else {
    return { error: true, message: "Email is not valid" };
  }
}
```

The function gets the job done, happy days.

But looking again at the code, you have that itch. It's your consciousness telling you that you can do better than that.

So you look back at your code at you notice a couple of things:

1. the validation is spread across all the function
2. the happy path is hidden inside a jungle of if/else
3. we have a lot of code indentation

Let's apply the bouncer pattern.
To do that, we just have to reverse the if checks which now acts as guards: the execution of the function is blocked when a check is not satisfied

```js
function updateEmail() {
  if (!isEmailValid) {
    return { error: true, message: "Email is not valid" };
  }

  if (!isEmailUnique) {
    return { error: true, message: "Email already in use" };
  }

  saveEmail();
  return { error: false, message: "Email updated" };
}
```

At voilà! After our small refactoring, we have:

1. the validation is all the beginning of the function
2. the happy path is more visible at the bottom of the function
3. the ugly indentation is wrong

Bonus point: the code is clearer and shorter 💯
