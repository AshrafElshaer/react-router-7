import { use } from "react";

export function ReactUse({promise}:{promise:Promise<string>}){
    const data = use(promise)
    return <div>{data}</div>
}