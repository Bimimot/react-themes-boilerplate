import styles from './app.module.scss';
import { Header } from '../header/header';
import { Slider } from '../slider/slider';
import { Footer } from '../footer/footer';
import { ContentContainer } from '../content-container/ContentContainer';

import StyleTheme from '../../helpers/StyleTheme';

const styleTheme = new StyleTheme("DARK");

export const App = () => {

    return (
        <div className={styles.page}>
            <Header>
                <Slider isOn={styleTheme.currentTheme === "DARK"}
                        callback={(mode: boolean) => styleTheme.setTheme(mode ? "DARK" : "LIGHT")}
                />
            </Header >
            <ContentContainer>
                MAIN LANDING CONTENT
            </ContentContainer>
            <Footer />
        </div>
    )
}