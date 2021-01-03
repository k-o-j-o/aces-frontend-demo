export default (...resources) => ({
    name: 'sass-resources',
    transform(code, id) {
        if (id.endsWith('.sass')) {
            code = resources
                .map((resource) => `@import ${resource}\n`)
                .join('\n') + code;
        } else if (id.endsWith('.scss')) {
            code = resources
                .map((resource) => `@import ${resource};\n`)
                .join('\n') + code;
        }
        return { code, map: null };
    }
});