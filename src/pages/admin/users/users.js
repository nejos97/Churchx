import React, { Component } from 'react'
import Layout from '../../../components/Layout/Layout'

const Users = () => {
    return (
        <Layout title={'List of users'} >
            <span>
                This is the content of the page
                <button className='btn btn-success' >ok</button>
            </span>
        </Layout>
    )
}

export default Users;