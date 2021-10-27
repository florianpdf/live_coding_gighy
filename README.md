# React Giphy

## Description
Create a page that will display a list of gifs and show the selected gif.
![image](https://user-images.githubusercontent.com/10998585/138947897-a2a0f9f8-14d6-4b76-9b47-7beb01ba70aa.png)

1. create the components according to the diagram
![image](https://user-images.githubusercontent.com/10998585/138947966-49410036-24c4-4e4b-9141-1fb18c40dda3.png)

2. on `App`, fetch from giphy API. **Don't forget to create your API key!**
```http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5```

3. iterate over a list of 5 gifs, and display the `Gif` on `GifList`.

4. when clicking on a `Gif`, it is displayed on `SelectedGif`

# TODO: Add your API Key
1. Create a file `secret.js` in `src` folder
2. Put `export const apiKey = "your_api_key_here"` in there
3. In App.js, import your apiKey with `import { apiKey } from "./secret.js"

## Requirements
- React props, react state.
- Fetch.

MadeBy WildCodeSchool
