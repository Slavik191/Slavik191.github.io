import {registerCustomDirective} from '../utils.mjs'

registerCustomDirective('test', {
    fields: [{
      name: 'table',
      label: 'Table',
      widget: "string"
    }],
    toPreview: ({contents, htmlElement}) => (
        `<span class="sidenote"><span class="sidenote__toggle">${htmlElement}</span><span class="sidenote__note">${contents}</span></span>`
    ),
});