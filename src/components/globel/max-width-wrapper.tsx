import { cn } from "../../utils/functions/cn";
import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full  px-4 ",
            className,
        )}>
            {children}
        </section>
    )
};

export default MaxWidthWrapper