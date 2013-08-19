---
# all these variables are accessible using:
#     {{ page.* }}
title: Hello world in Lua
perex: Without sugar edition!
layout: post
---
Pure hello world is just boring, it's just:

```lua
print "Hello world!"
```

Boring, I say, boring! Hmm, let's remove that ```print``` sugar and show something more interesting!

```lua
io.stdout:write("Hello world!\n")
```
