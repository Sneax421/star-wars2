
import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => <Friend picture={friend} pos={index +1} key={index} />)}
        </section>
    );
};

export default DreamTeam;