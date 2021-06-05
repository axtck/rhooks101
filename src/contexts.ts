import { createContext } from 'react';
export const AuthorContext = createContext<IStateStringDef>({
    messageStateVal: "", setMessageStateVal: () => { },
    hexStateVal: "", setHexStateVal: () => { }
});