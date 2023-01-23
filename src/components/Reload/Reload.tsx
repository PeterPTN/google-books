import style from './Reload.module.scss';

const mainLoad = () => {
  return (
    <div className={style.Container}>
      <div className={style.Container__spinner}></div>
    </div>
  )
}

export default mainLoad