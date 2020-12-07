import NewsItem from './NewsItems/NewsItem';
import Stories from './Stories/Stories';

function News() {
    return(
        <div>
            <Stories />
            <NewsItem communityName='На приеме у Шевцова' newsText='Шалом братцы' groupPicture='https://sun9-61.userapi.com/impf/c625129/v625129140/2ba73/E9fCln-HXBg.jpg?size=100x0&quality=96&crop=372,1167,824,824&sign=5854d39e385ca20f3061fe7644d537fd&ava=1' />
            <NewsItem communityName='CRUNCH' newsText='Шутка' postImage='https://sun9-62.userapi.com/impg/XQLvo5TA3PEB4K7bVSx4Hgfn4eRA8Oq9NdOFlw/RUf1r0FHTSg.jpg?size=618x630&quality=96&proxy=1&sign=486391336af55219ea6e34e957f8fb5d' groupPicture='https://sun9-50.userapi.com/impg/NlxtD9_3HKlQJB1Kwsbie8ZpOzKvihieHAGp7g/QU9nZTwspp8.jpg?size=100x0&quality=96&crop=106,850,1306,1306&sign=f49db82d950c6d6c60cbd4283254b785&ava=1' />
            <NewsItem communityName='CRUNCH' newsText='Мы переехали сюда' groupPicture='https://sun9-50.userapi.com/impg/NlxtD9_3HKlQJB1Kwsbie8ZpOzKvihieHAGp7g/QU9nZTwspp8.jpg?size=100x0&quality=96&crop=106,850,1306,1306&sign=f49db82d950c6d6c60cbd4283254b785&ava=1' />
        </div>
    );
}

export default News;