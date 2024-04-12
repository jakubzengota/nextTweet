'use client';

import React, { createContext, FC, useState } from "react";

export interface IModalsContext {
    languageModal: {
        isOpenModalLanguage: boolean;
        openModalLanguage: () => void;
        closeModalLanguage: () => void;
    };
}

export const ModalsContext = createContext<IModalsContext>({
    languageModal: {
        isOpenModalLanguage: false,
        openModalLanguage: () => {},
        closeModalLanguage: () => {},
    }
});

const ModalsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isOpenModalLanguage, setIsOpenModalLanguage] = useState(false);

    const openModalLanguage = () => {
        console.log("test")
        setIsOpenModalLanguage(true);
    };

    const closeModalLanguage = () => {
        setIsOpenModalLanguage(false);
    };

    const contextValue: IModalsContext = {
        languageModal: {
            isOpenModalLanguage,
            openModalLanguage,
            closeModalLanguage,
        },
    };

   

    return (
        <ModalsContext.Provider value={contextValue}>
            {children}
        </ModalsContext.Provider>
    );
};

export default ModalsProvider;
