# gatsby-remark-liquid-tags
A template plugin used for custom embeds in markdowns

### Install
```shell
npm install --save gatsby-transformer-remark gatsby-remark-liquid-tags
```

### When to use
This plugin enables custom embeds in markdowns. At the moment, it only allows codepens and youtube videos.

### How to use 
1. Add the plugin to your gatsby configuration file.
```js
// In your gatsby-config.js
plugins: [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                `gatsby-remark-liquid-tags`
            ]
        }
    }
]
```

2. Use them in markdowns with this syntax - `{% embed-site embed-url embed-options %}`
The embed-options argument is optional. It is only used in codepens for setting the default tab
Example:
```markdown
Check out this pen {% codepen https://codepen.io/Dillion/pen/bGGeZON tab=result %}
Watch this video {% youtube WoPI_7fnKlM %}
```

- The codepen tag uses the link to the pen and the optional configuration for the default tab to display
- The youtube tab uses the hash at the end of the url (e.g https://www.youtube.com/watch?v=`4dBVuTbjy6I`)

### Inspiration
This whole plugin idea came as result of how it was used in [dev.to (DEV COMMUNITY) platform](https://dev.to) for embedding services in markdowns.

### Contributions
Contributions are highly welcome to enable more embeds such as tweets, GitHub repositories, Stackoverflow questions, etc. 

#### How To Contribute
Ensure you have some markdown files to work with
- Fork this repository or download
- Place the folder in a 'plugins' folder in the root directory.
- Change your location to the `gatsby-remark-liquid-tags` folder.
  - `cd plugins/gatsby-remark-liquid-tags`
- Install dependencies
  - `npm i`
- Add the plugin to `gatsby-config` as shown above.
- Make your changes in development mode
- Push and make a pull request.

### Author
[Dillion Megida](https://dillionmegida.com/about)

### License
MIT
