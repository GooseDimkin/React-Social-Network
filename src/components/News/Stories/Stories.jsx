import s from './Stories.module.css';
import StorieItem from './StorieItems/StorieItem';

function Stories() {
    return(
        <div className={s.wrapper}>
            <div className={s.label}>Stories</div>
            <div className={s.stories_section}>
                <StorieItem storie_preview='https://sun9-25.userapi.com/impg/IdbZslw5iAv-bVG5vCqX1vI6zpTeLFii0-Vqew/zi563-XDmsg.jpg?size=859x859&quality=96&proxy=1&sign=bd0aa55d3b0842268abce47945cf33de' />
                <StorieItem storie_preview='https://sun9-54.userapi.com/impg/YeZuyYkgPTcF3rTUuDoeoFznsnoXViX5Cdyepg/dW1s7fSP3kk.jpg?size=1089x1080&quality=96&proxy=1&sign=a5ffbdd65876af3b406ca4874d8bc69e' />
                <StorieItem storie_preview='https://sun9-63.userapi.com/impg/1FixqZSrPuUfQiUUzeNSq4EqoiA72M60wjxMzw/j2A5zGSKrlo.jpg?size=534x604&quality=96&proxy=1&sign=2a056d2442f048234b27e8c9df664114' />
                <StorieItem storie_preview='https://sun9-49.userapi.com/impg/m9ZYQmGyr19batk5OcKZ8_br3pZev7Gw36cGnw/0etGaY4Cg4o.jpg?size=811x1147&quality=96&proxy=1&sign=d9aecd20dc406138989f35173c257937' />
            </div>
        </div>
    );
}

export default Stories;