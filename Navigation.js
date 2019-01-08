import React from 'react';
import styles from './Navigation.module.css';
import {Navbar, Nav, NavItem, Row} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Row>
                <Navbar inverse collapseOnSelect className={styles.navbarCustom}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">ZALORA</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                WOMEN
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                MEN
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        )
    }
}

export default Navigation;