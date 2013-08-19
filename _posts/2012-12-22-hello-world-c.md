---
# all these variables are accessible using:
#     {{ page.variable_name }}
title: Hello world in C/C++
perex: Brief description.
layout: post
---
Hello world in C can be used in C++.
I am not sure, but I think it's ok...

```c
#include <stdio.h>

int main(int, char**)
{
   printf("Hello, World!");
   return 0;
}

```

This is the only correct ```Hello world!``` in C++. There are no warnings,
no errors. Note there is a newline at the end.

```cpp
#include <iostream>

int main(int, char**) {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

```
