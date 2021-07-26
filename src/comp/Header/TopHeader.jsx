import React , {useState} from "react";
import logo from "../../images/logo.jpg"
import { useHistory } from "react-router-dom";
import { useAuth} from "../FirebaseAuthService/AuthContext";
import { Alert } from "react-bootstrap";

function TopHeader() {
const{currentUser , logout} = useAuth();
const [error, setError] = useState('');

async function handleLogout(){
    try{
      await logout();
    }catch {
      setError('Failed to Log Out');
    }
  }
    
const history = useHistory();

    return (
        <div className="top-header navbar-nav top container-fluid ">
            <div className="row-sm-6">
                <img className = "float-left" src={logo} alt="" height="60" width="70"/>
                <h1 className=" top-header-color top-margin ">
                    Tellmeastorymom
                    <div className="float">
                    {error && <Alert variant = "danger">{error}</Alert>}
                    {   currentUser 
                            ? 
                        <button onClick={handleLogout} className="btn btn-sm btn-outline-warning mr-2 mt-2 mb-1">
                            Log Out
                        </button>
                            :
                        <button onClick={() => {history.push("/login")}} className="btn btn-sm btn-outline-warning mr-2 mt-2 mb-1">
                            Login
                        </button> 
                    }
                    {!currentUser && <button onClick={() => {history.push("/signup")}} className="btn btn-sm btn-outline-warning  mt-2 mb-1"> 
                        Sign up
                    </button>}
                    </div>
                </h1>


            </div>
        </div>
    );
}

export default TopHeader;