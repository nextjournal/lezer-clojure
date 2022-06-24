import {NodeProp} from "@lezer/common"

// FIXME: naïvely restored to previoius NodeProp.flag() behaviour
let flag = new NodeProp({deserialize: str => true})

export const coll = flag
export const prefixColl = flag
export const prefixEdge = flag
export const sameEdge = flag
export const prefixContainer = flag
