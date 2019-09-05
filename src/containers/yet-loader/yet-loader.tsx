import { Props } from './props';

export const YetLoader = ({ condition, content, cap }: Props) => {
    if (condition) {
        return content();
    }
    return cap;
};
