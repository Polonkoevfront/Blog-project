import { Button, Form, Text } from '../../shared';
import { Category, Navbar } from '../../widgets';
import cls from './AddPost.module.scss';
import plus from "../../shared/assets/svg/plus-3107.svg";

export const AddPost = () => {
    return (
        <div className={cls.add_post}>
            <Navbar />

            <Form>
                <div className={cls.post_body}>
                    <div className={cls.avatar_block}>
                        <Text as='h6' fz={24} fw={700}>Добавить пост</Text>
                        <div className={cls.avatar_body}>
                            <div className={cls.circle_avatar}>
                                <img className={cls.img} src={plus} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={cls.elements_block}>
                        <div className={cls.input_label}>
                            <input placeholder='Введите название поста' type="postname" />
                        </div>
                        <Category />
                        <div className={cls.label}>
                            <textarea placeholder='Введите описание поста' name="" ></textarea>
                        </div>
                        <Button variant='primary' size='huge'>Добавить</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}