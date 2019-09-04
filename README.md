# About
Helping students get over gulp and turning 😭 into 😁.

# Why
So you can still you building blocks.

# YML Data
You can no longer do stuff like this:

```html
  ---
  nav
    - Home
    - About
  ---
  <h1> </h1>
```

Instead you must add a `file.yml` in `src/data/file.yml`. This is **global** data.


# Panini is no longer a thing...
Instead of:

```html 
  {{>some-component-name}}
```

NOW you would write it with [posthtml-include](https://github.com/posthtml/posthtml-include):
```
<include src="./partials/building-blocks/topbar-responsive.html"></include>
```



# Previewing the site
`http://localhost:1234/test.html`

#Path issues...
This you may not need to worry about unless you deal heavily with foundation's scss core files. slack me if you run into issues compling scss.


Maybe it can be fixed with alias?

```json
  "alias": {
    "~": "./node_modules/foundation-sites/scss/foundation"
  },
```