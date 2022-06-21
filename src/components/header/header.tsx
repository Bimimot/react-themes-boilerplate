
import { FC, PropsWithChildren } from 'react';
import styles from './header.module.scss';

export const Header:FC<PropsWithChildren> = (props) => {

    return (
        <div className={`border ${styles.header}`}>
            HEADER CONTENT            
            {props.children}
        </div>
    )
}