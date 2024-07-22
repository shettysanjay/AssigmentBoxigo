import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Checkbox, Button } from '@mui/material';
import NavigationBar from './NavigationBar';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WarningIcon from '@mui/icons-material/Warning';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';

const styles = {
    container: {
        padding: '16px'
    },
    header: {
        fontWeight: 900,
        marginBottom: '16px',
        position: 'absolute',
        top: '30px',
        left: '260px',
        fontSize: '1.7em',
        letterSpacing: '0.05em'
    },
    rowHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'calc(100% - 500px)',
        position: 'relative',
        left: '250px',
        marginTop: '70px',
        width: '68%',
    },
    rowItem: {
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 500px)',
        position: 'relative',
        left: '250px',
        marginTop: '10px',
        width: '67%',
    },
    headerItem: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '0.95em'
    },
    dataItem: {
        flex: 1,
        textAlign: 'left',
        fontSize: '0.85em',
        marginTop: '-15px', // Move text up
    },
    headerItemFrom: {
        textAlign: 'left',
        fontSize: '0.95em',
    },
    dataItemFrom: {
        textAlign: 'left',
        fontSize: '0.85em',
        marginTop: '-30px', // Move text up
    },
    headerItemTo: {
        textAlign: 'center',
        fontSize: '0.95em',
    },
    dataItemTo: {
        textAlign: 'left',
        fontSize: '0.85em',
        maxWidth: '300px',
        overflow: 'hidden',
        whiteSpace: 'normal',
        textOverflow: 'ellipsis'
    },
    headerItemRequest: {
        textAlign: 'right',
        fontSize: '0.95em',
        marginLeft: '1.6rem',
    },
    dataItemRequest: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'orange',
        marginTop: '-50px', // Move text up
        marginLeft: '70px',
    },
    arrowIcon: {
        color: 'orange',
        backgroundColor: 'white',
        border: '1px solid white',
        borderRadius: '50%',
        fontSize: '20px',
        padding: '10px',
        filter: 'drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))',
        marginRight: '20px',
        marginBottom: '20px',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        position: 'relative',
        left: '245px',
        justifyContent: 'flex-start',
        border: 'none',
        width: '67%',
    },
    iconStyle: {
        fontSize: '24px',
        marginRight: '5px',
        color: 'orange'
    },
    dataItemFrom: {
        textAlign: 'left',
        marginRight: '55px'
    },
    checkbox: {
        color: 'orange',
        border: '2px solid orange',
        borderRadius: '0',
        padding: '2px',
        marginRight: '8px',
        width: '24px',
        height: '24px'
    },
    checkboxIcon: {
        color: 'orange'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        left: '18%', // Move buttons 30% to the left
        top: '-20%', // Move buttons 10% up
        transform: 'translateX(-30%) translateY(-10%)', // Adjust for better positioning
        marginTop: '-30px' // Adjust if needed
    },
    button: {
        marginLeft: '15px',
        textTransform: 'capitalize',
        color: 'orange',
        backgroundColor: 'white',
        borderColor: 'orange'
    },
    disclaimerContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        position: 'relative',
        left: '250px'
    },
    disclaimer: {
        fontSize: '12px',
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: '5px'
    },
    disclaimerText: {
        fontSize: '12px',
        color: 'gray',
        textAlign: 'left',
        marginLeft: '5px'
    },
    warningIcon: {
        color: 'white',
        backgroundColor: 'orange',
        borderRadius: '50%',
        fontSize: '16px',
        padding: '2px',
        marginRight: '5px'
    },
    detailsSection: {
        marginTop: '20px',
        position: 'relative',
        left: '250px'
    },
    sectionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '1.1em',
        color: 'black',
    },
    sectionButton: {
        borderColor: 'black',
        color: 'white',
        backgroundColor: 'black',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        padding: '3px 7px', // Adjust padding for a smaller button
        fontSize: '0.8em',  // Adjust font size
        borderRadius: '4px', // Optional: Rounded corners
        left: '-81%', // Adjust positioning as needed
    },
    greyLine: {
        borderTop: '1px solid grey',
        margin: '10px 0'
    },
    keyContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
        paddingLeft: '0px',
        width: '85%',
        marginTop: '5px',
    },
    keyText: {
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left',
    },
    valueContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '7px',
        width: '85%'
    },
    valueText: {
        color: 'black',
        flex: 1,
        textAlign: 'left',
        marginBottom: '7px',
    },
    expandableContainer: {
        backgroundColor: '#F3F0EF',
        padding: '12px',
        borderRadius: '5px',
        width: '71%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '11px',
        marginBottom: '20px',
    },
    expandableText: {
        color: 'orange',
        fontWeight: 'bold',
    },
    expandedContent: {
        // backgroundColor: 'lightgrey',
        padding: '10px',
        marginTop: '10px',
        borderRadius: '5px',
        width: '60%',
    },
    editIcon: {
        fontSize: '14px', // Size of the pencil icon
        color: 'gray', // Icon color
        marginLeft:'-20px',
        marginRight:'18px',
    },
};

function MyMovesPage() {
    const [moves, setMoves] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showDetails, setShowDetails] = useState({});
    const [expandedSection, setExpandedSection] = useState(null);

    useEffect(() => {
        axios.get('http://test.api.boxigo.in/sample-data/')
            .then(response => {
                setMoves(response.data.Customer_Estimate_Flow);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleCheckboxChange = (index) => {
        setSelectedItems(prevSelectedItems => {
            // Check if the item is already selected
            if (prevSelectedItems.includes(index)) {
                // If yes, remove it (uncheck)
                return prevSelectedItems.filter(item => item !== index);
            } else {
                // If no, add it (check)
                return [...prevSelectedItems, index];
            }
        });
    };

    const handleViewMoreDetails = (index) => {
        setShowDetails(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const handleToggleExpand = (section) => {
        setExpandedSection(prev => prev === section ? null : section);
    };


    return (
        <>
            <NavigationBar />
            <Box style={styles.container}>
                <Typography variant="h6" style={styles.header}>
                    My Moves
                </Typography>
                {moves.map((move, index) => (
                    <Box key={index}>
                        <Box style={styles.rowHeader}>
                            <Typography variant="body1" style={{ ...styles.headerItem, ...styles.headerItemFrom }}>
                                From
                            </Typography>
                            <Typography variant="body1" style={styles.headerItem}>
                                To
                            </Typography>
                            <Typography variant="body1" style={{ ...styles.headerItem, ...styles.headerItemRequest }}>
                                Request#
                            </Typography>
                        </Box>
                        <Box style={styles.rowItem}>
                            <Typography style={{ ...styles.dataItem, ...styles.dataItemFrom }}>
                                {move.moving_from}
                            </Typography>
                            <ArrowForwardIcon sx={styles.arrowIcon} />
                            {/* <i className="bi bi-arrow-right" style={styles.arrowIcon}></i> */}
                            <Typography style={{ ...styles.dataItem, ...styles.dataItemTo }}>
                                {move.moving_to}
                            </Typography>
                            <Typography style={{ ...styles.dataItem, ...styles.dataItemRequest }}>
                                {move.estimate_id}
                            </Typography>
                        </Box>
                        <Box style={styles.iconContainer}>
                            <HomeIcon style={styles.iconStyle} />
                            <Typography variant="body2" style={styles.dataItemFrom}>
                                {move.property_size}
                            </Typography>
                            <WidgetsIcon style={styles.iconStyle} />
                            <Typography variant="body2" style={styles.dataItemFrom}>
                                {move.total_items}
                            </Typography>
                            <PinDropIcon style={styles.iconStyle} />
                            <Typography variant="body2" style={styles.dataItemFrom}>
                                {move.distance}
                            </Typography>
                            <CalendarMonthIcon style={styles.iconStyle} />
                            <Typography variant="body2" style={styles.dataItemFrom}>
                                {move.moving_on}
                            </Typography>
                            <EditIcon style={styles.editIcon} />
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox
                                    checked={selectedItems.includes(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                    style={styles.checkbox}
                                />
                                <Typography variant="body2" style={styles.dataItemFrom}>
                                    Is Flexible
                                </Typography>
                            </Box>
                        </Box>
                        <Box style={styles.buttonContainer}>
                            <Button variant="outlined" style={styles.button} onClick={() => handleViewMoreDetails(index)}>
                                View More Details
                            </Button>
                            <Button variant="contained" style={{ ...styles.button, backgroundColor: 'orange', color: 'white', borderColor: 'orange' }}>
                                Quotes Awaiting
                            </Button>
                        </Box>
                        {showDetails[index] && (
                            <Box style={styles.detailsSection}>
                                <Typography variant="h6" style={styles.sectionHeader}>
                                    Inventory Details
                                    <Button variant="outlined" style={styles.sectionButton}>
                                        Edit Inventory
                                    </Button>
                                </Typography>
                                {/* Furniture Section */}
                                <Box style={styles.expandableContainer} onClick={() => handleToggleExpand('furniture')}>
                                    <Typography variant="body1" style={styles.expandableText}>
                                        Living Room
                                    </Typography>
                                    {expandedSection === 'furniture' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </Box>
                                {expandedSection === 'furniture' && (
                                    <Box style={styles.expandedContent}>
                                        <Typography variant="body2" style={styles.valueText}>since it is having n number of object Data is very hard to fetech</Typography>
                                        <Typography variant="body2" style={styles.valueText}>
                                            <Link to="/test" style={styles.valueText}>
                                                <Typography variant="body2">
                                                    Link to see Qty output
                                                </Typography>
                                            </Link>
                                        </Typography>
                                        <Typography variant="body2" style={styles.valueText}>
                                            <Link to="/testpage" style={styles.valueText}>
                                                <Typography variant="body2">
                                                    Link to see extracted of multiple obj
                                                </Typography>
                                            </Link>
                                        </Typography>
                                    </Box>
                                )}

                                {/* Electronics Section */}
                                <Box style={styles.expandableContainer} onClick={() => handleToggleExpand('electronics')}>
                                    <Typography variant="body1" style={styles.expandableText}>
                                        Bed Room
                                    </Typography>
                                    {expandedSection === 'electronics' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </Box>
                                {expandedSection === 'electronics' && (
                                    <Box style={styles.expandedContent}>
                                        <Typography variant="body2" style={styles.valueText}>123</Typography>
                                        <Typography variant="body2" style={styles.valueText}>456</Typography>
                                        <Typography variant="body2" style={styles.valueText}>789</Typography>
                                        <Typography variant="body2" style={styles.valueText}>10 11</Typography>
                                    </Box>
                                )}

                                {/* Vehicle Section */}
                                <Box style={styles.expandableContainer} onClick={() => handleToggleExpand('vehicle')}>
                                    <Typography variant="body1" style={styles.expandableText}>
                                        Kitchen
                                    </Typography>
                                    {expandedSection === 'vehicle' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </Box>
                                {expandedSection === 'vehicle' && (
                                    <Box style={styles.expandedContent}>
                                        <Typography variant="body2" style={styles.valueText}>123</Typography>
                                        <Typography variant="body2" style={styles.valueText}>456</Typography>
                                        <Typography variant="body2" style={styles.valueText}>789</Typography>
                                        <Typography variant="body2" style={styles.valueText}>10 11</Typography>
                                    </Box>
                                )}

                                {/* Home Appliance Section */}
                                <Box style={styles.expandableContainer} onClick={() => handleToggleExpand('homeAppliance')}>
                                    <Typography variant="body1" style={styles.expandableText}>
                                        Bathroom
                                    </Typography>
                                    {expandedSection === 'homeAppliance' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </Box>
                                {expandedSection === 'homeAppliance' && (
                                    <Box style={styles.expandedContent}>
                                        <Typography variant="body2" style={styles.valueText}>123</Typography>
                                        <Typography variant="body2" style={styles.valueText}>456</Typography>
                                        <Typography variant="body2" style={styles.valueText}>789</Typography>
                                        <Typography variant="body2" style={styles.valueText}>10 11</Typography>
                                    </Box>
                                )}
                                <Typography variant="h6" style={styles.sectionHeader}>
                                    House Details
                                    <Button variant="outlined" style={styles.sectionButton}>
                                        Edit House Details
                                    </Button>
                                </Typography>
                                <Typography variant="body1" style={{ color: 'orange', fontWeight: 'bold', marginTop: '10px' }}>
                                    Existing House Detail
                                </Typography>
                                <Box style={styles.keyContainer}>
                                    <Typography variant="body1" style={styles.keyText}>
                                        Floor No.
                                    </Typography>
                                    <Typography variant="body1" style={styles.keyText}>
                                        Elevator Available
                                    </Typography>
                                    <Typography variant="body1" style={styles.keyText}>
                                        Packing Required
                                    </Typography>
                                    <Typography variant="body1" style={styles.keyText}>
                                        Distance from truck to door
                                    </Typography>
                                </Box>
                                <Box style={styles.valueContainer}>
                                    <Typography variant="body2" style={styles.valueText}>
                                        {move.old_floor_no}
                                    </Typography>
                                    <Typography variant="body2" style={styles.valueText}>
                                        {move.old_elevator_availability}
                                    </Typography>
                                    <Typography variant="body2" style={styles.valueText}>
                                        {move.packing_service}
                                    </Typography>
                                    <Typography variant="body2" style={styles.valueText}>
                                        {move.old_parking_distance}
                                    </Typography>
                                </Box>
                                <Typography variant="body1" style={{ color: 'black', fontWeight: 'bold', marginTop: '10px' }}>
                                    Additional Information
                                </Typography>
                                <Typography variant="body2" style={styles.valueText}>
                                    No Additional info.
                                </Typography>
                                <Box style={styles.greyLine}>
                                    <Typography variant="body1" style={{ color: 'orange', fontWeight: 'bold', marginTop: '5px' }}>
                                        New House Detail
                                    </Typography>
                                    <Box style={styles.keyContainer}>
                                        <Typography variant="body1" style={styles.keyText}>
                                            Floor No.
                                        </Typography>
                                        <Typography variant="body1" style={styles.keyText}>
                                            Elevator Available
                                        </Typography>
                                        <Typography variant="body1" style={styles.keyText}>
                                            Packing Required
                                        </Typography>
                                        <Typography variant="body1" style={styles.keyText}>
                                            Distance from truck to door
                                        </Typography>
                                    </Box>
                                    <Box style={styles.valueContainer}>
                                        <Typography variant="body2" style={styles.valueText}>
                                            {move.new_floor_no}
                                        </Typography>
                                        <Typography variant="body2" style={styles.valueText}>
                                            {move.new_elevator_availability}
                                        </Typography>
                                        <Typography variant="body2" style={styles.valueText}>
                                            {move.unpacking_service}
                                        </Typography>
                                        <Typography variant="body2" style={styles.valueText}>
                                            {move.new_parking_distance}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" style={{ color: 'black', fontWeight: 'bold', marginTop: '10px' }}>
                                        Additional Information
                                    </Typography>
                                    <Typography variant="body2" style={styles.valueText}>
                                        No Additional info.
                                    </Typography>
                                </Box>
                            </Box>
                        )}

                        <Box style={styles.disclaimerContainer}>
                            <WarningIcon style={styles.warningIcon} />
                            <Typography variant="body2" style={styles.disclaimer}>
                                Disclaimer:
                            </Typography>
                            <Typography variant="body2" style={styles.disclaimerText}>
                                Please note that all data is subject to verification.
                            </Typography>

                        </Box>
                    </Box>

                ))}
            </Box>
        </>
    );
}

export default MyMovesPage;