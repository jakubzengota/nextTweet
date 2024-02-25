import React from 'react';

interface IHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

const Children: React.FC<IHeaderProps> = ({ className, children }) => {
    // Używamy szablonu literału zamiast konkatenacji dla lepszej czytelności.
    const classNames = `${className} w-full`;
    return (
        <section id="header" className={classNames}>
            {children}
        </section>
    );
};

export default Children;
