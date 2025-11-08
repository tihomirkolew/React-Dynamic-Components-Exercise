import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import UserList from './components/UserList'
import Pagination from './components/Pagination'

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList />

                    <Pagination />

                </section>

                {/* User details component  */}

                {/* Create/Edit Form component  */}

                {/* Delete user component  */}
            </main>

            <Footer />
        </>
    )
}

export default App
