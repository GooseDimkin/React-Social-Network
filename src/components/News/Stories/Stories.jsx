import s from './Stories.module.css';
import StorieItem from './StorieItems/StorieItem';

function Stories() {
    return(
        <div className={s.stories_section}>
            <StorieItem storie_preview='https://sun9-25.userapi.com/impg/IdbZslw5iAv-bVG5vCqX1vI6zpTeLFii0-Vqew/zi563-XDmsg.jpg?size=859x859&quality=96&proxy=1&sign=bd0aa55d3b0842268abce47945cf33de' />
            <StorieItem storie_preview='https://sun9-40.userapi.com/impg/KiMMZ4ZdB-mPI17CH110fV3-QpX8GpjvuowZAg/ApR5M6rgMFI.jpg?size=500x707&quality=96&proxy=1&sign=881fa7fd60d3f45cbdbaa68d7cceed3f' />
            <StorieItem storie_preview='https://sun9-54.userapi.com/impg/YeZuyYkgPTcF3rTUuDoeoFznsnoXViX5Cdyepg/dW1s7fSP3kk.jpg?size=1089x1080&quality=96&proxy=1&sign=a5ffbdd65876af3b406ca4874d8bc69e' />
            <StorieItem storie_preview='https://sun9-63.userapi.com/impg/1FixqZSrPuUfQiUUzeNSq4EqoiA72M60wjxMzw/j2A5zGSKrlo.jpg?size=534x604&quality=96&proxy=1&sign=2a056d2442f048234b27e8c9df664114' />
        </div>
    );
}

export default Stories;