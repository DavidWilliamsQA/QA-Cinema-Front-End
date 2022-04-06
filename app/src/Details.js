import { useLocation, useParams } from "react-router-dom";

export default function Details(props) {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
    const query = useQuery()
    console.log(query.get("name"))
    console.log(query.get("id"))



    return(
        <div className="catalog">
            <div className="container">
                <p>
                    {/* {console.log(props)} */}
                </p>
            </div>
	    </div>
              
    )
}