import { DefLike, Boolean, Nil } from "./parser.terms.js"

export const specializeSymbol = function(value, stack) {
    switch(value) {
    case "nil":
        return Nil;
    case "true":
    case "false":
        return Boolean;
    default:
        if(value.slice(0,3) == "def") {
            return DefLike;
        } else {
            return -1;
        };
    };
};
