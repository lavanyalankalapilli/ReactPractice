import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState(props.children[0].props.label);
    const { children } = props;

    const styles = {
        container: {
            height: '100%',
            minHeight: '100%'
        },
        header: {
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 800,
            backgroundColor: '#191a1d',
            height: '20%',
        },
        siteLogo: {
            height: 120,
            marginLeft: 100,
            marginTop: 40

        },
        menuList: {
            display: 'inline',
            position: 'absolute',
            right: 150,
            top: 75
        },
        tabContent: {
            position: 'absolute',
            zIndex: 600,
            width: '100%',
            height: '80%',
        },
        content: {
            backgroundColor: 'black'
        }
    }

    const onClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className="container" style={styles.container}>
            <div className="header" style={styles.header}>
                <img src="https://fontmeme.com/permalink/191213/61f3e6146a8ed274b13a3ff146258b10.png" style={styles.siteLogo} alt="lavanya" />
                <nav className="menu" style={styles.menu}>
                    <ol className="menu-list" style={styles.menuList}>
                        {children.map((child) => {
                            const { label } = child.props;

                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClick}
                                />
                            );
                        })}
                    </ol>
                </nav>
            </div>
            <div className="content" style={styles.content}>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div >
    );

};

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
}