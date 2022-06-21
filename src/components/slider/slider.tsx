import { FC, useState, useCallback } from "react";
import styles from './slider.module.scss';

export const Slider: FC<{
    isOn?: boolean,
    callback: Function
}> =
    (props) => {
        const { isOn = false, callback } = props;
        const [mode, setMode] = useState(isOn);

        const onSlide = useCallback(() => {
            const newMode = !mode;
            setMode(newMode);
            callback(newMode);
        }, [mode, callback]);

        return (
            <div
                className={`${styles.slider} ${mode ? styles.slider_mode_on : ""}`}
                onClick={onSlide}>
            </div>
        )
    }