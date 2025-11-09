import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import UserList from './components/UserList'
import Pagination from './components/Pagination'
import SaveUser from './components/SaveUser'
import { useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
            .then(response => response.json())
            .then(result => {
                setUsers(Object.values(result));
            })
            .catch((err) => alert(err.message))
    }, [forceRefresh]);

    const [showSaveUser, setShowSaveUser] = useState(false);

    const addUserClickHandler = () => {
        setShowSaveUser(true);
    }

    const closeUserModalHandler = () => {
        setShowSaveUser(false);
    }

    const addUserSubmitHandler = (event) => {
        // stop page refresh
        event.preventDefault();

        // get form data
        const formData = new FormData(event.target);

        // transform form data to object
        const { country, city, street, streetNumber, ...userData } = Object.fromEntries(formData);
        userData.address = {
            country,
            city,
            street,
            streetNumber
        };

        userData.createdAt = new Date().toISOString()
        userData.updatedAt = new Date().toISOString()

        // Create new user request
        fetch('http://localhost:3030/jsonstore/users', {
            method: 'POST',
            headers: {
                'content-type': 'application-json',
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(result => {


            })

    }

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} />

                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                    <Pagination />

                </section>

                {showSaveUser &&
                    <SaveUser
                        onClose={closeUserModalHandler}
                        onSubmit={addUserSubmitHandler}
                    />}

                {/* User details component  */}

                {/* Create/Edit Form component  */}

                {/* Delete user component  */}

            </main>

            <Footer />
        </>
    )
}

export default App
