import '../directives/sidenote.mjs'

const CategoriesControl = createClass({
    handleChange(e) {
        const {field, onChange} = this.props;
        const separator = field.get('separator', ', ');
        onChange(e.target.value.split(separator).map((e) => e.trim()));
    },

    render() {
        const {field, forID, classNameWrapper, value} = this.props;
        return h('input', {
            id: forID,
            className: classNameWrapper,
            type: 'text',
            value: value?.join?.(field.get('separator', ', ')) ?? '',
            onChange: this.handleChange,
        });
    },
});

const CategoriesPreview = createClass({
    render() {
        return h('ul', {}, this.props.value.map((val, index) => h('li', {key: index}, val)));
    }
});

const schema = {
    properties: {
        separator: {type: 'string'},
    },
}

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);
