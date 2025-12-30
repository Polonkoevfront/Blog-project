import { useParams } from 'react-router';
import { Post } from '../../widgets';
import cls from './FullPostPage.module.scss';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface PostData {
    id?: number;
    title?: string;
    createdAt?: string;
    imageUrl?: string;
    // user?: UserInfoData;
    viewsCount?: number;
    commentsCount?: number;
    tags?: string[];
    // children?: ReactNode;
    isFullPost?: boolean;
    isLoading?: boolean;
    isEditable?: boolean;
}

export const FullPostPage: FC<PostData> = (props) => {
    const {id, title, createdAt, imageUrl, viewsCount, commentsCount} = props;
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`/posts/${_id}`).then(res => {
            setData(res.data);
        }).catch((err) => {
            console.warn(err);
            alert("Ошибка при получение статьи");
        })
    }, []);

    if (isLoading) {
        return <Post isLoading={isLoading} />;
    };

    return (
        <>
            <Post
                _id={data._id}
                title={data.title}
                imageUrl='https://www.google.com/search?q=kali+linux&oq=&gs_lcrp=EgZjaHJvbWUqCQgHEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQoyMjE1ODFqMGo3qAIIsAIB8QUuj7RjZf5Y5g&sourceid=chrome&ie=UTF-8'
                user={{
                    avatarUrl: "avatarUrl",
                    fullName: "jaff"
                }}
                createdAt={"june 1"}
                viewsCount={1}
                commentsCount={2}
                isEditable
            />
        </>
    )
};
