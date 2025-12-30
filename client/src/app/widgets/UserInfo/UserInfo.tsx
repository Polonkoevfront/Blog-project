import { FC } from 'react';
import cls from './UserInfo.module.scss';

interface UserInfoProps {
    avatarUrl?: string;
    fullName?: string;
    additionalText?: string;
};

export const UserInfo: FC<UserInfoProps> = ({ avatarUrl, fullName, additionalText }) => {
    return (
        <div className={cls.root}>
            <img src={avatarUrl || "/noavatar.png"} alt={fullName} />
            <div className={cls.userDetails}>
                <span className={cls.userName}>{fullName}</span>
                <span className={cls.additional}>{additionalText}</span>
            </div>
        </div>
    )
}