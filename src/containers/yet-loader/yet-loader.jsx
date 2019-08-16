export const YetLoader = ({ condition, content, cap }) => {
    if (condition) {
        return content();
    }
    return cap;
};
