import { Navbar, Post } from '../../widgets';
import cls from './HomePage.module.scss';
// import axios from "../../axios";
import { Text } from '../../shared';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchTags } from '../../redux/slices/posts';
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { TagsForm } from '../../widgets/TagsForm/TagsForm';
export const HomePage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { posts, tags } = useSelector((state: RootState) => state.posts);

    const isPostsLoading = posts.status === "loading";
    const isTagsLoading = tags.status === "loading";

    React.useEffect(() => {
        // axios.get("/posts");
        dispatch(fetchPosts());
        dispatch(fetchTags());
    }, []);

    return (
        <div className={cls.home}>
            <Navbar />

            <div className={cls.cards_block}>
                <Text as='h5' fz={24} fw={700} className={cls.cards_block_txt}>Unusual blog</Text>
                <div>
                    {(isPostsLoading ? [...Array(6)] : posts.items).map((obj, key) => isPostsLoading ? <Post key={key} isLoading={true} /> : (
                        <Post key={key}
                            _id={obj._id}
                            title={obj.title}
                            imageUrl='https://www.google.com/search?q=kali+linux&oq=&gs_lcrp=EgZjaHJvbWUqCQgHEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQoyMjE1ODFqMGo3qAIIsAIB8QUuj7RjZf5Y5g&sourceid=chrome&ie=UTF-8'
                            user={obj.user}
                            createdAt={obj.createdAt}
                            viewsCount={obj.viewsCount}
                            commentsCount={obj.commentsCount}
                            tags={obj.tags}
                            isEditable
                        />
                    ))}
                </div>
                <TagsForm items={tags.items} isLoading={isTagsLoading} />
            </div>
        </div>
    )
}
