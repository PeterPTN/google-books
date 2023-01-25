import styles from './Preview.module.scss';
import NotFound from '../../assets/images/notFound.png'
import { splitString } from '../../services/util-funcs';

interface PropTypes {
  previewData: any,
  sideLoad: boolean,
  setSideLoad: (arg0: boolean) => void;
}

const Preview = ({ previewData, sideLoad, setSideLoad }: PropTypes) => {
  let loader = "";
  const title = previewData.volumeInfo.title || "No title";
  const fullDescription = previewData.volumeInfo.description || previewData.volumeInfo.subtitle;
  const delimitedDescription = fullDescription !== undefined ? splitString(fullDescription) : ["No description"];
  const link = previewData.volumeInfo.infoLink;
  const src = previewData.volumeInfo.imageLinks ? previewData.volumeInfo.imageLinks.smallThumbnail : NotFound;
  const authors = previewData.volumeInfo.authors.length > 0
    ? previewData.volumeInfo.authors.join(", ")
    : "Not applicable";

  if (sideLoad) {
    loader = styles.Load
    // Match animation speed
    setTimeout(() => setSideLoad(false), 150);
  } else {
    loader = "";
  }

  return (
    <div className={styles.Preview}>
      <header className={loader}>
        <img src={src} />

        <div>
          <h2>{title}</h2>
          <p>{authors}</p>
          <a href={link} target='_blank' rel="noopener noreferrer" >Find out more</a>
        </div>
      </header>

      <main className={loader}>
        <h3>Description</h3>
        {delimitedDescription.map((paragraph: string, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </main>
    </div>
  )
}

export default Preview

