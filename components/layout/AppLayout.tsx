import React, {FC, PropsWithChildren} from 'react';
import Navbar from "@/components/Navbar";

const AppLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="container">

                {children}
            </div>
        </>
    );
}

export default AppLayout;