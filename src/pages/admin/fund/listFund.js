import React from 'react';
import { Table } from 'rsuite';
import Layout from '../../../components/Layout/Layout';

const { Cell, HeaderCell, Column } = Table;

const fakeData = [
    {
      "id": 1,
      "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=E",
      "city": "New Amieshire",
      "email": "Leora13@yahoo.com",
      "firstName": "Ernest Schuppe SchuppeSchuppeSchuppeSchuppeSchuppeSchuppe Schuppe",
      "lastName": "Schuppe",
      "street": "Ratke Port",
      "zipCode": "17026-3154",
      "date": "2016-09-23T07:57:40.195Z",
      "bs": "global drive functionalities",
      "catchPhrase": "Intuitive impactful software",
      "companyName": "Lebsack - Nicolas",
      "words": "saepe et omnis",
      "sentence": "Quos aut sunt id nihil qui.",
      "stars": 820,
      "followers": 70
    },
    {
      "id": 2,
      "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=J",
      "city": "New Gust",
      "email": "Mose_Gerhold51@yahoo.com",
      "firstName": "Janis",
      "lastName": "Vandervort",
      "street": "Dickinson Keys",
      "zipCode": "43767",
      "date": "2017-03-06T09:59:12.551Z",
      "bs": "e-business maximize bandwidth",
      "catchPhrase": "De-engineered discrete secured line",
      "companyName": "Glover - Hermiston",
      "words": "deleniti dolor nihil",
      "sentence": "Illo quidem libero corporis laborum.",
      "stars": 1200,
      "followers": 170
    },
    {
      "id": 3,
      "avartar": "https://via.placeholder.com/40x40/3498ff/FFFFFF?text=M",
      "city": "Lefflerstad",
      "email": "Frieda.Sauer61@gmail.com",
      "firstName": "Makenzie",
      "lastName": "Bode",
      "street": "Legros Divide",
      "zipCode": "54812",
      "date": "2016-12-08T13:44:26.557Z",
      "bs": "plug-and-play e-enable content",
      "catchPhrase": "Ergonomic 6th generation challenge",
      "companyName": "Williamson - Kassulke",
      "words": "quidem earum magnam",
      "sentence": "Nam qui perferendis ut rem vitae saepe.",
      "stars": 610,
      "followers": 170
    },
];

const ListFund = () => {
    return (
        <Layout title={'Caisse Centrale'} >
            <Table
                data={fakeData}
                onRowClick={data => {
                    console.log(data);
                }}
                className="container"
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