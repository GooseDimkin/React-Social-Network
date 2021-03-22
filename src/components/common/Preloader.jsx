import loading from './../../assets/loading.gif';
import style from './Preloader.module.css';

let Preloader = () => {
    return <img className={style.preloader} src={loading} alt='loading'/>
}

export default Preloader;