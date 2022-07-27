import {registerCustomDirective} from '../utils.mjs'

registerCustomDirective('table', {
    fields: [{
        name: 'table',
        label: 'Table',
        widget: "list",
        label_singular: "row",
        fields: [{
          label: "Title", 
          name: "title", 
          widget: "string"
        }]
    }],
    toPreview: ({contents, htmlElement}) => (
        `<span class="sidenote"><span class="sidenote__toggle">${htmlElement}</span><span class="sidenote__note">${contents}</span></span>`
    ),
});