import { Dashboard } from '@rsuite/icons';
import React from 'react'
import Layout from '../../components/Layout/Layout';
import { Activity, Box, Boxes, Crop } from 'react-bootstrap-icons';

const Home = () => {
    return (
        <Layout title={'Dashboard'} >
            <div className='row' >
                <div class="callout callout-success">
                    <center><h4>Gestion des Divisions</h4></center>
                </div>
                <div className='col-lg-3' >
                    <div className='border p-5 text-white bg-success text-center rounded m-2' >
                        <Activity size={30} />
                        <h6>Caisse centrale</h6>
                    </div>
                </div>

                <div className='col-lg-3' >
                    <div className='border p-5 text-white bg-danger text-center rounded m-2' >
                        <Box size={30} />
                        <h6>Régions</h6>
                    </div>
                </div>

                <div className='col-lg-3' >
                    <div className='border p-5 text-white bg-warning text-center rounded m-2' >
                        <Boxes size={30} />
                        <h6>Districts</h6>
                    </div>
                </div>

                <div className='col-lg-3' >
                    <div className='border p-5 text-white bg-info text-center rounded m-2' >
                        <Crop size={30} />
                        <h6>Paroisses</h6>
                    </div>
                </div>
            </div>

            
        </Layout>
    )
}

export default Home;