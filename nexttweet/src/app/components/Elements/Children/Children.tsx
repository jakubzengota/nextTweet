import React from 'react';
import clsx from 'clsx';
import style from "./Children.module.css";
interface IHeaderProps {
    children?: React.ReactNode;
    className?: string;
}

const Children: React.FC<IHeaderProps> = ({children, className }) => {
    // Używamy szablonu literału zamiast konkatenacji dla lepszej czytelności.
    return (
        <section id="children" className={clsx(className,style.children)}>
            {children}
        </section>
    );
};

export default Children;
