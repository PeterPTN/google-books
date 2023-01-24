import styles from "./About.module.scss";

interface PropTypes {
    canDisplay: boolean;
}

const About = ({ canDisplay }: PropTypes) => {
    const aboutStyles = [styles.About]

    if (canDisplay) aboutStyles.push(styles.Opacity);

    return (
        <div className={aboutStyles.join(" ")}>
            <p>This is a SPA fetching data from Google Book's API.
                Made with React, TSX and SASS.</p>
            <a href="https://github.com/PeterPTN/google-books" target="_blank" rel="noopener norefferer">Github Repo</a>
            <a href="https://pptn-web-dev.netlify.app/" target="_blank" rel="noopener norefferer">Creator</a>
        </div>
    )
}

export default About