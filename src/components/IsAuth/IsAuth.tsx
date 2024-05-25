import useIsAuth from "@/utils/useIsAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface IAuthTemplate{
    children: React.ReactNode,
    page: string
}

const IsAuth = ({children, page}: IAuthTemplate) => {
    


    return(
        <div>
            {children}
        </div>
    )
}

export default IsAuth;