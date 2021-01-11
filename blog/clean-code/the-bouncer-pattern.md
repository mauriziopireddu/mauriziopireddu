---
title: "The bouncer pattern"
date: "2020-12-29"
excerpt: "The bouncer pattern, AKA early returns, is a simple technique to make your code more readable.
You might find it particularly useful when your code has many if statement and you want to reduce the code indentation."
---

# The bouncer pattern

The bouncer pattern, AKA early returns, is a simple technique to make your code more readable.
You might find it particularly useful when your code has many if statement and you want to reduce the code indentation.

Let's have a look at the following snippet:

```js
function breedGuesser(options) {
  if (options) {
    if (options.size === "Giant") {
      return "Saint Bernard";
    } else if (options.size === "Medium") {
      return "Chow Chow";
    } else {
      return "Corgi";
    }
  } else {
    return "Can't guess the breed without a hint 😢";
  }
}
```

As you can see, the important part of this function is wrapped inside the first if block.

```js
if (options) {
  // juicy part
}
```

Let's apply the bouncer pattern.
To do that, we just need to reverse the first if check.

```js
function breedGuesser(options) {
  if (!options) {
    return "Can't guess the breed without a hint 😢";
  }

  if (options.size === "Giant") {
    return "Saint Bernard";
  }

  if (options.size === "Medium") {
    return "Chow Chow";
  }

  return "Corgi";
}
```

The idea is to make all the possible validations as soon as possible.

Another great benefit of this approach is that it allows to focus on what's really important, getting the invalid cases out of the way.
