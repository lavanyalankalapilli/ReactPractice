import React from "react";
import PropTypes from "prop-types";

export const Tab = (props) => {

    const { label, onClick, activeTab } = props;
    const [color, setColor] = React.useState('#5e5e5e');
    const styles = {
        tabItem: {
            cursor: 'pointer',
            fontFamily: '"Rubik","Arial",sans-serif',
            fontWeight: 300,
            fontSize: '1.5rem',
            listStyle: 'none',
            display: 'inline-block',
            float: 'left',
            paddingLeft: 40,
            color: color
        },
        tabListActive: {
            cursor: 'pointer',
            color: '#fff',
            fontFamily: '"Rubik","Arial",sans-serif',
            fontWeight: 300,
            fontSize: '1.5rem',
            listStyle: 'none',
            display: 'inline-block',
            float: 'left',
            paddingLeft: 40,
        }
    };

    const handler = () => {
        onClick(label)
    };

    let styleRendered = styles.tabItem;
    if (activeTab === label) {
        styleRendered = styles.tabListActive
    }

    return (
        <li onClick={handler} style={styleRendered} onMouseEnter={() => setColor('#fff')} onMouseLeave={() => setColor('#5e5e5e')}>{label}</li>
    );
};

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};