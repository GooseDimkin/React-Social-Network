import s from './News.module.css';

import NewsItem from './NewsItems/NewsItem';
import Stories from './Stories/Stories';
import InputArea from 'D:/nodejs-first-project/first-app/src/components/InputArea/InputArea';

function News() {

    let newsData = [
        {
         communityName: 'Около 50 всяческих знакомств в сутки', 
         newsText: 'Смотрите какой кисик',
         postImage: 'https://sun9-36.userapi.com/impg/z4vcn2E9ESK2BTpraEsrn-fa31mz5TgiL99HZg/g8-zz_BcBhs.jpg?size=1280x1280&quality=96&proxy=1&sign=56c954b32c07d16c6a3a217108c4120d',
         groupPicture: 'https://sun9-56.userapi.com/impf/c639420/v639420066/bb51/AUwYh8dWSGo.jpg?size=50x0&quality=96&crop=90,0,263,263&sign=d305f41860747edd14981298d4be7b01&ava=1'
        },

        {
         communityName: 'На приеме у Шевцова',
         newsText: 'Шалом братцы',
         postImage: '',
         groupPicture: 'https://sun9-61.userapi.com/impf/c625129/v625129140/2ba73/E9fCln-HXBg.jpg?size=100x0&quality=96&crop=372,1167,824,824&sign=5854d39e385ca20f3061fe7644d537fd&ava=1'
        },

        {
         communityName: 'CRUNCH',
         newsText: 'Шутка',
         postImage: 'https://sun9-62.userapi.com/impg/XQLvo5TA3PEB4K7bVSx4Hgfn4eRA8Oq9NdOFlw/RUf1r0FHTSg.jpg?size=618x630&quality=96&proxy=1&sign=486391336af55219ea6e34e957f8fb5d',
         groupPicture: 'https://sun9-50.userapi.com/impg/NlxtD9_3HKlQJB1Kwsbie8ZpOzKvihieHAGp7g/QU9nZTwspp8.jpg?size=100x0&quality=96&crop=106,850,1306,1306&sign=f49db82d950c6d6c60cbd4283254b785&ava=1'
        },

        {
         communityName: 'CRUNCH',
         newsText: 'Мы переехали сюда',
         postImage: '',
         groupPicture: 'https://sun9-50.userapi.com/impg/NlxtD9_3HKlQJB1Kwsbie8ZpOzKvihieHAGp7g/QU9nZTwspp8.jpg?size=100x0&quality=96&crop=106,850,1306,1306&sign=f49db82d950c6d6c60cbd4283254b785&ava=1'
        }
    ];

    let newsElements = newsData.map(n => <NewsItem communityName={n.communityName} newsText={n.newsText} postImage={n.postImage} groupPicture={n.groupPicture} />);

    return(
        <div className={s.news_area}>
            <div>
                <InputArea />
                <Stories />
                {newsElements}
            </div>
            <div className={s.right_section}>

            </div>
        </div>
    );
}

export default News;