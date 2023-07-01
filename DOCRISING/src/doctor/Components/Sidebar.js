import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  let history=useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    // Perform logout actions here (e.g., clear tokens, session data, etc.)
    // Redirect the user to the login or home page
    history('/Doctor/SignIn') // Replace with your desired redirect URL
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', }}>
      <CDBSidebar textColor="#fff" backgroundColor="linear-gradient(to bottom right, #16BFFD, #CB3066)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            DocRising
          </a>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Doctor/Dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Doctor/Appointments" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heartbeat">Appointments</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Doctor/AppointmentsReq" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bullhorn">Appointments Requests</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Doctor/Profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <CDBSidebarMenuItem icon="fa-solid fa-arrow-right"><button onClick={handleLogout} style={{fontSize:"x-large",fontFamily:"cursive",fontWeight:"bold"}} className="btn btn-outline-light" >Signout</button></CDBSidebarMenuItem>
            

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            DocRising ©
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;