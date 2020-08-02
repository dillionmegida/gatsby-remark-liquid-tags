
# Available services and their options

- [Available services and their options](#available-services-and-their-options)
  - [codepen](#codepen)
  - [codesandbox](#codesandbox)
  - [youtube](#youtube)
  - [google-slides](#google-slides)
  - [soundcloud](#soundcloud)
  - [slides](#slides)
  - [jsfiddle](#jsfiddle)

## codepen

- `url`: of the codepen.
- `tabs`(optional): to be shown by default, separated with commas and no spaces e.g html,result. The default value is 'result'
- Example: {% codepen https://codepen.io/Dillion/pen/jddJSs tab=html,css %}

## codesandbox

- `hash`: of the box. Usually found at the end of the url. e.g the url 'https://codesandbox.io/s/admiring-rosalind-d' has the hash **admiring-rosalind-d**
- Example: {% codesandbox admiring-rosalind-d %}

## youtube

- `hash`: of the video. Usually found at the end of the url. e.g the url 'https://www.youtube.com/watch?v=U9VF-4euyRo' has the hash **U9VF-4euyRo**
- Example: {% youtube U9VF-4euyRo %}

## google-slides

**Note that** you'd need to get a public URL from google slides to embed the slide (not the presentation URL). To do this, you'll select "Publish to the web" in the file menu, select publish then get the public URL which you'd use.

- `public_url`: of the presentation which has been published.
- Example: {% google-slides https://docs.google.com/presentation/d/e/... %}

## soundcloud

- `url`: of the song.
- Example: {% soundcloud https://soundcloud.com/... %}

## slides

- `url`: of the of the slide (slide.com)
- Example: {% slides https://slides.com/dillionme... %}

## jsfiddle

- `url`: of the of the fiddle.
- `theme`(optional): which is either light or dark. Default is light.
- Example: {% jsfiddle https://jsfiddle.net/dillion... theme=dark %}
