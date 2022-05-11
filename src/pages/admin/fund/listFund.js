import React from 'react';
import { Table, fakeData, Column, HeaderCell, Cell, dataKey } from 'rsuite';
import Layout from '../../../components/Layout/Layout';

const ListFund = () => {
    return (
        <Layout title={'Caisse Centrale'} >

            <Table
                height={400}
                data={fakeData}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Column width={70} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={200} fixed>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="firstName" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="lastName" />
                </Column>

                <Column width={200}>
                    <HeaderCell>City</HeaderCell>
                    <Cell dataKey="city" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Street</HeaderCell>
                    <Cell dataKey="street" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Company Name</HeaderCell>
                    <Cell dataKey="companyName" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                </Column>
                <Column width={120} fixed="right">
                    <HeaderCell>Action</HeaderCell>

                    <Cell>
                        {rowData => {
                            function handleAction() {
                                alert(`id:${rowData.id}`);
                            }
                            return (
                                <span>
                                    <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
                                </span>
                            );
                        }}
                    </Cell>
                </Column>
            </Table>


        </Layout>
    )
}

export default ListFund;