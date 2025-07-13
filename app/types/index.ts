import { ReactNode } from "react";

export type LayoutRootProps=Readonly<{
  children: React.ReactNode;
}>

export type Model ={
  id:number
  name:string
  description:string
  likes:number
  image:string
  category:string
  dateAdded:string
}

export type ModelCardProps={
  model:Model
}

export type PillProps={
  children:ReactNode
  className?:string
}