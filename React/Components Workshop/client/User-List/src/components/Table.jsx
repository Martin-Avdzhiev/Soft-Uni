import CreateUserModal from "./CreateUserModal";
import TableRow from "./TableRow";
import { UserInfoModal } from "./UserInfoModal";
import { useEffect, useState } from "react";
import { getAll, create, getOne, deleteUser } from "../services/userService";
const Table = () => {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const data = getAll().then(result => setUsers(Object.values(result)));
    }, []);
    const createUserClickHandler = () => {
        setShowCreate(!showCreate);
    }
    const onUserCreate = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const result = await create(formData);
        setShowCreate(false);
        setUsers(state => [...state, result]);
    };
    const userInfoClickHandler = async (userId) => {
        const user = await getOne(userId);
        setUserInfo(user);
        setShowInfo(true);
    }
    const onClickDeleteUser = async (id) => {
        const deletedUser = await deleteUser(id);
        setUsers(state => state.filter(x => x._id !== id));
    }
    return (
        <div className="table-wrapper">

            {/* <!-- <div className="table-overlap">
               <svg
                   aria-hidden="true"
                   focusable="false"
                   data-prefix="fas"
                   data-icon="triangle-exclamation"
                   className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512"
               >
                   <path
                       fill="currentColor"
                       d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                   ></path>
               </svg>
               <h2>There is no users yet.</h2>
           </div> --> */}

            {/* <!-- No content overlap component  --> */}

            {/* <!-- <div className="table-overlap">
               <svg
                   aria-hidden="true"
                   focusable="false"
                   data-prefix="fas"
                   data-icon="triangle-exclamation"
                   className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512"
               >
                   <path
                       fill="currentColor"
                       d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                   ></path>
               </svg>
               <h2>Sorry, we couldn't find what you're looking for.</h2>
           </div> --> */}

            {/* <!-- On error overlap component  --> */}

            {/* <!-- <div className="table-overlap">
               <svg
                   aria-hidden="true"
                   focusable="false"
                   data-prefix="fas"
                   data-icon="triangle-exclamation"
                   className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512"
               >
                   <path
                       fill="currentColor"
                       d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                   ></path>
               </svg>
               <h2>Failed to fetch</h2>
           </div> -->
            <!-- </div> --> */}
            {showCreate && <CreateUserModal
                createUserClickHandler={createUserClickHandler}
                onUserCreate={onUserCreate}
            />}

            {showInfo && <UserInfoModal userInfo={userInfo} onClose={() => setShowInfo(false)} />}
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Table row component --> */}
                    {users.map(user => (
                        <TableRow
                            key={user._id}
                            _id={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            phoneNumber={user.phoneNumber}
                            createdAt={user.createdAt}
                            updatedAt={user.updatedAt}
                            imageUrl={user.imageUrl}
                            address={user.address}
                            onUserInfoClick={userInfoClickHandler}
                            onClickDeleteUser={onClickDeleteUser}
                        />
                    ))}

                </tbody>
            </table>
            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
        </div>
    )
}

export default Table;