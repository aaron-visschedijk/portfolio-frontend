import React, { useEffect } from "react";
import styles from "./styles/Loader.module.css"

type LoaderProps<T> = {
    request: Promise<T>;
    children: (data: T) => React.ReactNode;
    fallback?: React.ReactNode;
};

function Loader<T>({ request, children, fallback = <Fallback/> }: LoaderProps<T>) {
    const [data, setData] = React.useState<T | null>(null);

    useEffect(() => {
        request.then((data) => setData(data));
    }, [request]);

    return <>{data ? children(data as T) : fallback}</>;
}


function Fallback() {
    return <div className={styles.spinner}>
        <div>Hello World</div>
    </div>;
}


export default Loader;