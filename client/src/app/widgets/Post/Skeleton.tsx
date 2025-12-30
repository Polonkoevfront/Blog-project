import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import cls from './Post.module.scss';

export const PostSkeleton = () => {
    return (
        <div className={cls.skeleton}>
            <Stack>
                <Skeleton style={{ borderRadius: "4px" }} variant="rectangular" width="450px" height={25} />
                <Skeleton style={{ borderRadius: "4px", marginTop: "9px" }} variant="rectangular" width="250px" height={18} />
                <Skeleton style={{ borderRadius: "4px", marginTop: "12px" }} variant="rectangular" width="480px" height={18} />
                <Skeleton style={{ borderRadius: "4px", marginTop: "5px" }} variant="rectangular" width="480px" height={18} />
                <Skeleton style={{ borderRadius: "4px", marginTop: "5px" }} variant="rectangular" width="480px" height={18} />
            </Stack>
        </div>
    )
}