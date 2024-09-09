import {FC, PropsWithChildren} from "react";

export const Btn: FC<PropsWithChildren<{ onClick: () => void }>> = ({
                                                                        children,
                                                                        ...props
                                                                    }) => {
    return (
        <button
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md"
            {...props}
        >
            {children}
        </button>
    );
};