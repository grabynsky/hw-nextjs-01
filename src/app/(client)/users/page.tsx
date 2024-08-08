import React from 'react';
import {IUser} from "@/models/IUser";
import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

const UsersPage = async () => {

    const allUsers: IUser[] = await getAllUsers();

    return (
        <div>
            <ul>
                {
                    allUsers.map((value, index) =>
                        <li key={index}>

                            <Link href={
                                {pathname:'/users/' + value.id, query: {data: JSON.stringify(value)}}
                            }>
                                {value.username}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default UsersPage;