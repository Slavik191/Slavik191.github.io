import remarkDirective from 'https://esm.sh/remark-directive@2'

CMS.registerRemarkPlugin(remarkDirective);

export const nanoYaml = {
    encode: obj => [...Object.entries(obj)].map(([k, v]) => `${k}: ${v}`).join('\n'),
    decode: string => Object.fromEntries(
        string.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => line.split(':').map(el => el.trim()))
    )
}

export const renderCustomDirective = (name, contents, options) => [
    `:::${name}`,
    ...(options ? [nanoYaml.encode(options), "---"] : []),
    contents,
    ":::"
].join('\n')

export const customDirectivePattern = name => new RegExp(`^:::${name}\\n+((?:.|\\n)+)\\n+:::$`, 'm')

export const registerCustomDirective = (name, options) => CMS.registerEditorComponent({
    id: name,
    label: options.label || `${name[0].toUpperCase()}${name.slice(1)}`,
    pattern: customDirectivePattern(name),
    fromBlock([, match]) {
        console.log(match);
        const [options, ...contents] = match.split(/\n+---+\n+/m);
        return {
            ...nanoYaml.decode(options),
            contents: contents.join('\n---\n'),
        };
    },
    toBlock: ({contents, ...options}) => renderCustomDirective(name, contents, options),
    ...options,
});