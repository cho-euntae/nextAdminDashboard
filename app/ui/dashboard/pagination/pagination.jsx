"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css'

const Pagenation = ({count}) => {
    
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathName = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams);
    // console.log("count = "+count);
    const ITEM_PER_PAGE = 3

    const hasPrev = ITEM_PER_PAGE * (parseInt(page)-1) > 0
    const hasNext = ITEM_PER_PAGE * (parseInt(page)-1) + ITEM_PER_PAGE < count

    const handleChangePage = (type) => {
        type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
        replace(`${pathName}?${params}`);
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChangePage("prev")}> Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={()=>handleChangePage("next")}> Next</button>
        </div>
    )
}

export default Pagenation