import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import data from './data'
import { Column } from "@ant-design/plots";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper, TableContainer } from '@mui/material';

const KeptiveDashboard = () => {
    const [filter, setFilter] = useState({ decimal: 2 })
    const [filterdData, setFilterdData] = useState(data);

    const handleFilter = () => {
        let updatedData = JSON.parse(JSON.stringify(data));

        updatedData.forEach(entry => {
            let totalSum = 0;
            Object.keys(entry).forEach(key => {
                if (key !== "Overhead") {
                    let value = Number(entry[key]);

                    if (filter?.decimal !== undefined) {
                        value = value.toFixed(filter.decimal);
                        entry[key] = value;
                    }

                    if (filter?.currency) {
                        if (filter.currency == 1) {
                            value = (Number(value) / 83.44).toFixed(filter.decimal);
                            entry[key] = value + '$'; // 83.44 USD base price. It's a demo project so I'm using static values; in production environment, get live currency exchange rates
                        }
                        if (filter.currency == 2) {
                            value = (Number(value) / 90.58).toFixed(filter.decimal);
                            entry[key] = value + '€'; // 90.58 EURO base price
                        }
                        if (filter.currency == 3) {
                            value = (Number(value) / 105.96).toFixed(filter.decimal);
                            entry[key] = value + '£'; // 105.96 GBP base price
                        }
                    }

                    totalSum += Number(value);
                }
            });

            entry['totalSum'] = Number(totalSum.toFixed(filter?.decimal || 0));
        });

        setFilterdData([...updatedData]);
    };


    useEffect(() => {
        handleFilter();
    }, [filter])

    const config = {
        data: filterdData,
        xField: "Overhead",
        yField: "totalSum",
        height: 600,
        width: 1080,
        label: {
            position: "middle",
            style: {
                fill: "#FFFFFF",
                opacity: 0.6
            }
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: true
            },
            formatter: (text) => (text.length > 5 ? `${text.slice(0, 5)}...` : text),
        },
        autoFit: true,
        style: {
            overflow: "hidden"
        },
        // scrollBar: {type: "horizontal"},
        // slider: {
        //     x: {
        //         values: [0.1, 0.2],
        //     }
        // }
    };

    return (
        <React.Fragment>
            <div className="k_layout-list">
                <div className='k_flex k_align-center k_content-end k_layout-list-header'>
                    <div className='k_flex k_mr-10'>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-select-small-label">Currency</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-simple-select"
                                    value={filter?.currency}
                                    label="Currency"
                                    onChange={(e) => setFilter({ ...filter, currency: e.target.value })}
                                >
                                    <MenuItem value={1}>USD</MenuItem>
                                    <MenuItem value={2}>EUR</MenuItem>
                                    <MenuItem value={3}>GBP</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className='k_flex'>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-select-small-label">Decimal</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-simple-select"
                                    value={filter?.decimal}
                                    label="Decimal"
                                    onChange={(e) => setFilter({ ...filter, decimal: e.target.value })}
                                >
                                    <MenuItem value={0}>0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>

                <div className='k_layout-list-inner'>
                    {/* antv chart */}

                    <Column {...config} />

                    {/* Material-UI Table */}
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Overhead</TableCell>
                                        <TableCell>Jan</TableCell>
                                        <TableCell>Feb</TableCell>
                                        <TableCell>March</TableCell>
                                        <TableCell>April</TableCell>
                                        <TableCell>May</TableCell>
                                        <TableCell>June</TableCell>
                                        <TableCell>July</TableCell>
                                        <TableCell>August</TableCell>
                                        <TableCell>September</TableCell>
                                        <TableCell>October</TableCell>
                                        <TableCell>November</TableCell>
                                        <TableCell>December</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filterdData.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.Overhead}</TableCell>
                                            <TableCell>{item.Jan}</TableCell>
                                            <TableCell>{item.Feb}</TableCell>
                                            <TableCell>{item.March}</TableCell>
                                            <TableCell>{item.April}</TableCell>
                                            <TableCell>{item.May}</TableCell>
                                            <TableCell>{item.June}</TableCell>
                                            <TableCell>{item.July}</TableCell>
                                            <TableCell>{item.August}</TableCell>
                                            <TableCell>{item.September}</TableCell>
                                            <TableCell>{item.October}</TableCell>
                                            <TableCell>{item.November}</TableCell>
                                            <TableCell>{item.December}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
        </React.Fragment>
    )
}

export default KeptiveDashboard;
