import s from './Gifts.module.css';
import b from './../../../../box.module.css';

import GiftItem from './Gift_Item/GiftItem';

function Gifts(props) {

    let giftsCount = props.profileGiftsData.length;
    let giftItem = props.profileGiftsData.map(g => <GiftItem src={g.src}/>);

    return(
        <div>
            <div className={b.box}>
                <div className={s.gifts_label}>
                    Gifts 
                    <div className={s.gifts_count}>{giftsCount}</div>
                </div>
                <div className={s.gifts}>
                    {giftItem}
                </div>
            </div>
        </div>
    );
}

export default Gifts;