import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    { name: "Book", price: 15 },
    { name: "T-shirt", price: 70 },
    { name: "Phone", price: 700 },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter((unity) => {
      return unity.name !== item.name;
    });
    setCatalogue(newCatalogue);
  };
  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
