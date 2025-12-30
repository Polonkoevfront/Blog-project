import cls from './Category.module.scss';
import arrow from '../../shared/assets/svg/arrow_top.svg';

export const Category = () => {
    return (
        <div className={cls.category}>
            <span>Выберите категорию</span>
            <img src={arrow} alt="" />
        </div>
    )
}