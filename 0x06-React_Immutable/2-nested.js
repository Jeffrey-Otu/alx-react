import { fromJS } from "./node_modules/immutable/dist/immutable";

export default function accessImmutableObject(obj, arr) {
    const mappedObj =fromJS(obj)

    return mappedObj.getIn(arr, undefined)
}
