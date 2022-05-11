import React from 'react'

import {
  Dropdown,
  Header,
  Content,
  Container,
  Nav,
  Sidebar,
  Sidenav,
  Navbar,
  Avatar
} from 'rsuite'
import { Link } from 'react-router-dom';
import { Speedometer, Cash } from 'react-bootstrap-icons';


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  padding: 18,
  lineHeight: '56px',
  textAlign: 'center'
};

const renderAvatar = (props, ref) => {
  return (
    <Avatar {...props} ref={ref} style={{ background: '#000' }}>R</Avatar>
  );
};

const Layout = ({ title, children }) => {
  const [expand, setExpand] = React.useState(true);
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 12 }}>ADMINISTRATION</span>
            </div>
          </Sidenav.Header>
          <Sidenav className='bg-dark' expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
            <Sidenav.Body>
              <Nav onSelect={(eventKey) => console.log(eventKey)}>
                <Nav.Item eventKey="1" active >
                  <Link to={'/admin'}>
                    <Speedometer size={25} />
                    DASHBOARD
                  </Link>
                </Nav.Item>
                <Nav.Item eventKey="2">
                  <Cash size={25} />
                  <Link to={'/admin/fund'}>Caisse Centrale</Link> 
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Users"
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="3-2">
                    <Link to={'/admin/users'}>List</Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">
                    <Link to={'/admin/users/create'}>Create</Link>
                  </Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Sidebar>

        <Container>
          <Header>
            <Navbar appearance="inverse">
              <div className='d-flex justify-content-between p-1' style={{ width: '100%' }} >
                <a className="navbar-brand logo">
                  <h3 className='text-white' >{title}</h3>
                </a>
                <Dropdown renderToggle={renderAvatar} placement="bottomEnd">
                  <Dropdown.Item>New File</Dropdown.Item>
                  <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                  <Dropdown.Item>Download As...</Dropdown.Item>
                  <Dropdown.Item>Export PDF</Dropdown.Item>
                </Dropdown>
              </div>
            </Navbar>
          </Header>
          <Content>
            <div>
              {children}
            </div>
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default Layout;