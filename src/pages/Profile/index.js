import { Link } from "react-router-dom";
import { ProfileMain } from "../components/ProfileMain/index"

export const Profile = () => (
    <>
        <h1>Profile settings</h1>

        <ProfileMain></ProfileMain>
        
        <Link to="/home">Go to Home</Link>
    </>
);