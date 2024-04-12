// import Modal from 'react-modal';
import Modal from 'react-modal';
import { availableLang } from '@/i18n';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { IModalsContext, ModalsContext } from '@/Context/ModalsContext';

const ModalLanguage = () => {
    
    const { t : translate } = useTranslation();
    const { languageModal } = React.useContext(ModalsContext) as IModalsContext;

    return(
        <Modal isOpen={languageModal.isOpenModalLanguage} onRequestClose={languageModal.closeModalLanguage}>
            <header>Wybierz język</header>
            <main>

            </main>
            <footer>
                <button onClick={languageModal.closeModalLanguage}>
                    Zamknij
                </button>
            </footer>
        </Modal>
    )
}
export default ModalLanguage;