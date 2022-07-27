import {registerCustomDirective} from '../utils.mjs'

registerCustomDirective('sidenote', {
    fields: [{
        name: 'htmlElement',
        label: 'In-Text Element',
        widget: 'string'
    }, {
        name: 'contents',
        label: 'Contents',
        widget: 'markdown'
    }],
    toPreview: ({contents, htmlElement}) => (
        `<span class="sidenote"><span class="sidenote__toggle">${htmlElement}</span><span class="sidenote__note">${contents}</span></span>`
    ),
});