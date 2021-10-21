import { withRouter } from "react-router";
import { useSelector } from "react-redux";

function Profile(){
    const login = useSelector(state=>state.login);
    return(
        <h1>{login}</h1>
    )
}
export default withRouter(Profile);