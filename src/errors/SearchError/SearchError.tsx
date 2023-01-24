import style from './SearchError.module.scss';

const ErrorComponent = () => {
  return (
    <div className={style.Error}>
       <h1>Could not load content - try again</h1>
       <h2> ¯\_(ツ)_/¯</h2>
    </div>
  )
}

export default ErrorComponent