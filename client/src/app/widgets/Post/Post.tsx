import { FC, ReactNode } from 'react';
import cls from './Post.module.scss';
import { PostSkeleton } from './Skeleton';
import { UserInfo } from '../UserInfo/UserInfo';

import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

type UserInfoData = {
    avatarUrl?: string;
    fullName?: string;
};

interface PostProps {
    _id?: number;
    title?: string;
    createdAt?: string;
    imageUrl?: string;
    user?: UserInfoData;
    viewsCount?: number;
    commentsCount?: number;
    tags?: string[];
    children?: ReactNode;
    isFullPost?: boolean;
    isLoading?: boolean;
    isEditable?: boolean;
}

export const Post: FC<PostProps> = (props) => {
    const { _id,
        title,
        createdAt,
        imageUrl,
        user,
        viewsCount,
        commentsCount,
        tags,
        children,
        isFullPost,
        isLoading,
        isEditable
    } = props;

    if (isLoading) {
        return <PostSkeleton />;
    }

    const onClickRemove = () => { };

    return (
        <div className={clsx(cls.root, { [cls.rootFull]: isFullPost })}>
            {isEditable && (
                <div className={cls.editButtons}>
                    <a href={`/posts/${_id}/edit`}>
                        <IconButton color="primary">
                            <EditIcon />
                        </IconButton>
                    </a>
                    <IconButton onClick={onClickRemove} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </div>
            )}
            {imageUrl && (
                <img
                    className={clsx(cls.image, { [cls.imageFull]: isFullPost })}
                    src={imageUrl}
                    alt={title}
                />
            )}
            <div className={cls.wrapper}>
                <UserInfo {...user} additionalText={createdAt} />
                <div className={cls.indention}>
                    <h2 className={clsx(cls.title, { [cls.titleFull]: isFullPost })}>
                        {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
                    </h2>
                    <ul className={cls.tags}>
                        {tags.map((name) => (
                            <li key={name}>
                                <a href={`/tag/${name}`}>#{name}</a>
                            </li>
                        ))}
                    </ul>
                    {children && <div className={cls.content}>{children}</div>}
                    <ul className={cls.postDetails}>
                        <li>
                            <EyeIcon />
                            <span>{viewsCount}</span>
                        </li>
                        <li>
                            <CommentIcon />
                            <span>{commentsCount}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}