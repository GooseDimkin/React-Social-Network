import s from './Profile.module.css';

import Avatar from './Avatar/Avatar';
import TopProfileInfo from './TopProfileInfo/TopProfileInfo';
import BottomProfileInfo from './BottomProfileInfo/BottomProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import InputArea from 'D:/nodejs-first-project/first-app/src/components/InputArea/InputArea';

function Profile() {

    let postData = [
        {
            autorName: 'Дмитрий Лебедев',
            autorAvatar: 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6',
            content: 'А это второй, лол'
        },
        
        {
             autorName: 'Дмитрий Лебедев',
             autorAvatar: 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6',
             content: 'Мой первый пост'        
        }
    ];

    let postElements = postData.map(p => <ProfilePosts autorName={p.autorName} autorAvatar={p.autorAvatar} content={p.content}/>);

    let topProfileInfoData = [
        {
            profileName: 'Дмитрий Лебедев',
            profileStatus: 'Что-то типа статуса'
        }
    ];

    let topProfileInfoElement = topProfileInfoData.map(inf => <TopProfileInfo profileName={inf.profileName} profileStatus={inf.profileStatus} />);
    
    let bottomProfileInfoData = [
        {
            birthDay: 'January 6',
            companyName: 'Cringe Universe',
            websiteUrl: 'https://www.instagram.com/real_gustav/'
        }
    ];

    let bottomProfileInfoElement = bottomProfileInfoData.map(inf => <BottomProfileInfo birthDay={inf.birthDay} companyName={inf.companyName} websiteUrl={inf.websiteUrl} />);

    let avatarData = [
        {
            avatar: 'https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6'
        }
    ];

    let avatarElement = avatarData.map(a => <Avatar avatar={a.avatar} />);
    
    return(
        <div className={s.profile}>
            <div className={s.section}>
                {avatarElement}
            </div>
            <div className={s.section}>
                <div className={s.Profile_Info_Section}>
                    {topProfileInfoElement}
                    {bottomProfileInfoElement}
                </div>
            </div>
            <div className={s.posts_section}>
                <div className={s.input}>
                    <InputArea />
                </div>
                {postElements}
            </div>
        </div>
    );
}

export default Profile;