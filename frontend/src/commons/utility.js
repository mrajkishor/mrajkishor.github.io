
// About the function safeStringify:
// This function is used to stringify an object with circular references
// It uses WeakSet to keep track of objects that have been stringified
// and avoid infinite recursion
// It takes 3 arguments
// obj: object to be stringified
// replacer: function that transforms the results
// space: number of spaces to use for indentation
// It returns a JSON string
// Example usage:
// const obj = { a: 1, b: 2 };
// obj.c = obj;
// const str = safeStringify(obj);
// //console.log(str);
// Output: {"a":1,"b":2,"c":"[Circular]"}
// The function returns a JSON string with the circular reference replaced by "[Circular]"
// This is useful for debugging and logging objects with circular references

const safeStringify = (obj, replacer = null, space = 2) => {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return replacer ? replacer(key, value) : value;
    }, space);
}

// Helper function to transform the mapper object into a flat array of categories and items
const parseMapper = (contents) => {
    const result = [];
    Object.keys(contents).forEach((key) => {
        // Skip internal `___urlPath___` keys
        if (key.startsWith("_")) return;

        const category = { title: key, items: [] };
        const value = contents[key];

        // Check if the category contains nested items or is a leaf node
        if (typeof value === "object") {
            Object.keys(value).forEach((subKey) => {
                if (!subKey.startsWith("_")) {
                    category.items.push(subKey);
                }
            });
        }

        result.push(category);
    });
    return result;
};

export { safeStringify, parseMapper };
