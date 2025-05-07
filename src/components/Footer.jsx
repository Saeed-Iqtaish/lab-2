import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-dark text-white text-center py-3 mt-5">
                <div className="container">
                    <small>&copy; {new Date().getFullYear()} Movie Explorer. All rights reserved.</small>
                </div>
            </footer>
        </>
    )
}

export default Footer