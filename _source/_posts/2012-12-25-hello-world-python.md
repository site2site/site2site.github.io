---
title: Hello world in Python
perex: Hello world in Python 2 and Python 3.
layout: post
---

In Python 2 you can use the code bellow, but it's not
usable in Python 3:

```python
print "Hello world!"
```

In both Python 2 and Python 3 you can use:

```python3
print("Hello world!")
```

Actually ```print``` is indeed interesing in Python world.
In ancient times (before Python 3), the print was not a
function, it was a statement! And in Python 3 it is only a
function. But still, you can use brackets to print
something. It's not any kind of forward compability, object in
brackets is considered as a tuple, and that's all. So different
result can be encountered when you use a multiple valus in brackets:

```python
print('Hello', 'world!')
# result in Python 2:
# ('Hello', 'world!')
# and in Python 3:
# Hello world!
```

But let's forget this ```print``` sugar! Let's use something
more interesting:

```python
from sys import stdout

stdout.write("Hello world!\n")
```