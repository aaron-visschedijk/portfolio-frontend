import React, { useEffect } from "react";
import styles from "./styles/Loader.module.css"
import spinner from '../spinner.svg'

type LoaderProps<T> = {
    request: Promise<T>;
    children: (data: T) => React.ReactNode;
    fallback?: React.ReactNode;
};

function Loader<T>({ request, children, fallback = <Fallback /> }: LoaderProps<T>) {
    const [data, setData] = React.useState<T | null>(null);

    useEffect(() => {
        request.then((data) => {
            setData(data);
        });
    }, [request]);

    return <div>
        {!data && fallback}
        <div className={data ? styles.done : styles.not} >
            {data ? children(data as T) : fallback}
        </div>
    </div>;
}


function Fallback() {
    return <div className={styles.spinner}>
        <h3>Hold on a sec...</h3>
    </div>;
}


export default Loader;