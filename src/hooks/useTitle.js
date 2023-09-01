import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Toys World | ${title}`;
    },[title])

};

export default useTitle;