const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

const commonFunctions = require('./functions/common');

const getCodepen = require('./embeds/codepen');
const getTwitter = require('./embeds/twitter');
const getTwitter = require('./embeds/youtube');

let { breakLiquidTag } = commonFunctions;

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "paragraph", node => {

    // Grab the innerText of the heading node
    let text = toString(node)

    // Test paragraph if it includes a liquid tag format
    let exp = /((\{\%).*(\%\}))/g;
    let matches = text.match(exp);
    
    // // Only show embeds for liquid tags
    if(matches != null) {
        let tagDetails = breakLiquidTag(matches[0]);
        let { tagName, tagUrl, tagOpt } = tagDetails;

        let embed;

        // check the tagname to know which embed is to be used
        switch(tagName) {
            case 'codepen':
                embed = getCodepen(tagUrl, tagOpt);
                break;
            case 'twitter':
                embed = getTwitter(tagUrl);
                break;
            case 'youtube':
                embed = getYoutube(tagUrl);
                break;
            // case 'github':
            //     embed = getYoutube(tagUrl);
            default:
                return;
        }

        node.type = "html"
        node.children = undefined
        node.value = text.replace(exp, embed);
        
    }

  })
  return markdownAST
}