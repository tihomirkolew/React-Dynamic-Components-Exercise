import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import UserList from './components/UserList'
import Pagination from './components/Pagination'
import SaveUser from './components/SaveUser'

function App() {
    const [showSaveUser, setShowSaveUser] = useState(false);

    const addUserClickHandler = () => {
        setShowSaveUser(true);
    }

    const closeUserModalHandler = () => {
        setShowSaveUser(false);
    }

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList />

                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                    <Pagination />

                </section>

                {showSaveUser && <SaveUser onClose={closeUserModalHandler} />}

                {/* User details component  */}

                {/* Create/Edit Form component  */}

                {/* Delete user component  */}

            </main>

            <Footer />
        </>
    )
}

export default App
