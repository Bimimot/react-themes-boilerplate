import React, { FC, ReactNode } from 'react';
import styles from './content.module.scss';

export const ContentContainer: FC<{ children: ReactNode }> = (props) =>
    <div className={`border ${styles.content}`}>
        {props.children}
    </div>

