// Local imports
const commonFunctions = require('./functions/common');
const embeds = require('./functions/embed');

const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

let { breakLiquidTag } = commonFunctions;
let { getCodepen } = embeds;

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