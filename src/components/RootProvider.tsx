import {createContext,Dispatch,SetStateAction,useContext} from 'react'

interface RootCtxType{
  onSound:boolean;
  setOnSound: Dispatch<SetStateAction<boolean>>
}
const RootCtx = createContext<RootCtxType|undefined>(undefined)

export const useRootCtx = ()=>{
  const ctx = useContext(RootCtx)
  if(!ctx){
    throw Error('Component is beyond context...!')
  }else{
    return ctx;
  }
}

export const RootProvider = RootCtx.Provider