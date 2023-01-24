import style from './SearchError.module.scss';

const ErrorComponent = () => {
  return (
    <div className={style.Error}>
       <h1>That resulted in 0 matches!</h1>
       <h2> ¯\_(ツ)_/¯</h2>
    </div>
  )
}

export default ErrorComponent