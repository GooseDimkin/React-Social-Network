import s from './Profile.module.css';

import Avatar from './Avatar/Avatar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileName from './ProfileName/ProfileName';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import InputArea from 'D:/nodejs-first-project/first-app/src/components/InputArea/InputArea';

function Profile() {
    return(
        <div className={s.profile}>
            <div className={s.section}>
                <Avatar avatar='https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6' />
            </div>
            <div className={s.section}>
                <div className={s.Profile_Info_Section}>
                    <div>
                        <ProfileName profile_name='Дмитрий Лебедев' />
                        <ProfileStatus profile_status='Что-то типа статуса.' />
                    </div>
                    <div className={s.detail_profile_info}>
                        <div className={s.infoLabels}>
                            <li>Birthday:</li> 
                            <li>Company:</li>
                            <li>Website:</li>
                        </div>
                        <ProfileInfo birthDay='January 6' companyName='Cringe Universe' websiteUrl='https://www.instagram.com/real_gustav/' />
                    </div>
                </div>
            </div>
            <div className={s.posts_section}>
                <div className={s.input}>
                    <InputArea />
                </div>
                <ProfilePosts autorName='Дмитрий Лебедев' autorAvatar='https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6' content='А это второй, лол'/>
                <ProfilePosts autorName='Дмитрий Лебедев' autorAvatar='https://sun9-13.userapi.com/impg/3GV5l5eh2HxWoEDlApIa1TbqNxUfDbms91zFCQ/mR3fIh8Y3Y4.jpg?size=440x440&quality=96&proxy=1&sign=42dea185827e1e591f44a3cf211225e6' content='Мой первый пост'/>
            </div>
        </div>
    );
}

export default Profile;