import { useState, useContext, createContext } from "react";

const ContextModule = createContext();

export const useModule = () => {
  return useContext(ContextModule);
};

export const ContextProvider = ({children}) => {
  const [title, setTitle] = useState("hello world context world");
  const data = [
    {
      id:"1",
      title:"netowrking event",
      description:"this is networking event for machine learning developer",
      location:"San francisco",
      date:"2022-01-20",
      isFeatured:true,
    },
    {
      id:"2",
      title:"pasadena event",
      description:"this is networking event for artist with media art",
      location:"New york",
      date:"2022-11-20",
      isFeatured:false,
    },
    {
      id:"3",
      title:"school event",
      description:"this is local school event for k-12 student",
      location:"Chicago",
      date:"2022-07-21",
      isFeatured:true,
    },
    {
      id:"4",
      title:"netowrking event 4",
      description:"this is networking event 4 for machine learning developer",
      location:"San francisco",
      date:"2022-4-20",
      isFeatured:true,
    },
  ]
  const value = {
    title,
    data,
  };
  return (
    <ContextModule.Provider value={value}>{children}</ContextModule.Provider>
  );
};
