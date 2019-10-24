const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

const commonFunctions = require('./functions/common');

const getCodepen = require('./embeds/codepen');
const getYoutube = require('./embeds/youtube');

let { breakLiquidTag } = commonFunctions;

module.exports = ({ markdownAST }) => {
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
            case 'youtube':
                embed = getYoutube(tagUrl);
                break;
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