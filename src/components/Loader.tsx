import React, { useEffect } from "react";

type LoaderProps<T> = {
    request: Promise<T>;
    children: (data: T) => React.ReactNode;
    fallback?: React.ReactNode;

};

function Loader<T>({ request, children, fallback = <div /> }: LoaderProps<T>) {
    const [data, setData] = React.useState<T | null>(null);

    useEffect(() => {
        request.then((data) => setData(data));
    }, [request]);

    return <>{data ? children(data as T) : fallback}</>;
}

export default Loader;