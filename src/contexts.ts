import { createContext } from 'react';
export const ExampleContext = createContext<IExampleContextDef>({
    messageStateVal: "", setMessageStateVal: () => { },
    hexStateVal: "", setHexStateVal: () => { }
});